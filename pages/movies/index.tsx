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
import { IMovies, DemoResponse } from '@Interfaces';
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

	getFirst21 = (data: DemoResponse[]) => {
		return data
			.filter(e => e.programType === 'movie')
			.sort((a, b) => a.title.localeCompare(b.title))
			.slice(0, 14)
			.map(({ title, images: { 'Poster Art': { url } } }, i) => (
				<GridItem key={i} desc={title} img={url} />
			));
	};

	public render(): JSX.Element {
		const { data, err, isLoading } = this.props.movies;

		return (
			<Layout title="Popular Movies">
				{isLoading && <h1>Loading...</h1>}
				{err && <h3>{err}</h3>}

				<div className="grid-area">{data && this.getFirst21(data)}</div>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IMovies.IState) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(MoviesActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Movies);
