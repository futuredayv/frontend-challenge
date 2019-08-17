//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { MoviesActions } from '@Actions';
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IMovies, IStore, DemoResponse } from '@Interfaces';
import { Layout, GridItem, Search, Toast } from '@Components';
//#endregion Interface Imports

class Movies extends React.Component<IMovies.IProps, IMovies.IState> {
	constructor(props: IMovies.IProps) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.FetchJSON();
	}

	sort = (movies: DemoResponse[]) => {
		const { ordering, by } = this.props.filterOptions.sort;

		const compareFn = (a: DemoResponse, b: DemoResponse) => {
			switch (by) {
				case 'title':
					return a.title.localeCompare(b.title);
				case 'releaseYear':
					return a.releaseYear - b.releaseYear;
				default:
					return 0;
			}
		};

		return movies.sort((a, b) =>
			ordering === 'ASC' ? compareFn(a, b) : compareFn(b, a),
		);
	};

	filter = () => {
		const {
			movies,
			filterOptions: { search },
		} = this.props;

		return (
			movies &&
			movies
				.filter(movie => movie.releaseYear >= 2010)
				.filter(({ title }) =>
					title.toLowerCase().includes(search.toLowerCase() || ''),
				)
		);
	};

	renderMovies = () => {
		const filtered = this.filter();

		return (
			filtered &&
			this.sort(filtered)
				.slice(0, 21)
				.map(movie => ({
					title: movie.title,
					url: movie.images['Poster Art'].url,
				}))
				.map(({ title, url }, i) => (
					<GridItem key={i} desc={title} img={url} />
				))
		);
	};

	public render(): JSX.Element {
		const { err, isLoading } = this.props;

		return (
			<Layout title="Popular Movies">
				{isLoading || !!err ? (
					<Toast isLoading err={!!err} />
				) : (
					<>
						<Search />
						<div className="grid-area">{this.renderMovies()}</div>
					</>
				)}
			</Layout>
		);
	}
}

const mapStateToProps = (state: IStore) => state.movies;

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(MoviesActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Movies);
