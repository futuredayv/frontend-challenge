//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { Presentational } from './presentational';
import { MoviesActions } from '@Actions';
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IMovies, IStore } from '@Interfaces';
import { GridItem } from '@Components';
import { filter, sort, preparePageData } from '../../src/Helpers/PageHelpers';
//#endregion Interface Imports

class Movies extends React.Component<IMovies.IProps, IMovies.IState> {
	constructor(props: IMovies.IProps) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		this.props.FetchJSON();
	}

	renderMovies = () => {
		const { movies, filterOptions } = this.props;

		if (!movies) return;

		const filtered = filter(movies, filterOptions);
		const sorted = sort(filtered, filterOptions);

		return preparePageData(sorted).map(({ title, url }, i) => (
			<GridItem key={i} desc={title} img={url} />
		));
	};

	public render(): JSX.Element {
		return (
			<Presentational {...this.props}>
				{this.renderMovies()}
			</Presentational>
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
