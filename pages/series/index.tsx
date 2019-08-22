//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { Presentational } from './presentational';
import { MoviesActions } from '@Actions';
import { GridItem } from '@Components';
import { filter, sort, preparePageData } from '../../src/Helpers/PageHelpers';
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { ISeries, IStore } from '@Interfaces';
//#endregion Interface Imports

export class SeriesPage extends React.Component<ISeries.IProps, ISeries.IState> {
	constructor(props: ISeries.IProps) {
		super(props);
	}

	componentDidMount() {
		const { FetchJSON, series } = this.props;

		if (series && !series.length) FetchJSON();
	}

	renderSeries = () => {
		const { series, filterOptions } = this.props;

		if (!series) return;

		const filtered = filter(series, filterOptions);
		const sorted = sort(filtered, filterOptions);

		return preparePageData(sorted).map(({ title, url }, i) => (
			<GridItem key={i} desc={title} img={url} />
		));
	};

	public render(): JSX.Element {
		return (
			<Presentational {...this.props}>
				{this.renderSeries()}
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
)(SeriesPage);
