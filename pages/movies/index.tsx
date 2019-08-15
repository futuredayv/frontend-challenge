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
import { IMovies, DemoResponse, IStore } from '@Interfaces';
import { Layout, GridItem } from '@Components';
//#endregion Interface Imports

class Movies extends React.Component<IMovies.IProps, IMovies.IState> {
	constructor(props: IMovies.IProps) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.FetchJSON();
	}

	getFirst = (count: number) => {
		return this.props.movies
			.slice(0, count)
			.sort((a, b) => a.title.localeCompare(b.title))
			.map(({ title, images: { 'Poster Art': { url } } }, i) => (
				<GridItem key={i} desc={title} img={url} />
			));
	};

	public render(): JSX.Element {
		const { err, isLoading } = this.props;

		return (
			<Layout title="Popular Movies">
				{isLoading && <h1>Loading...</h1>}

				{err && <h1>FATAL ERROR!</h1>}

				<div className="grid-area">{this.getFirst(21)}</div>
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
