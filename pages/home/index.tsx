//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import './index.scss';
//#endregion Local Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
import { Layout, GridItem } from '@Components';
import { HomeActions } from '@Actions';
//#endregion Interface Imports

export class HomePage extends React.Component<
	IHomePage.IProps,
	IHomePage.IState
> {
	constructor(props: IHomePage.IProps) {
		super(props);
	}

	pages = [
		{
			name: 'Series',
			desc: 'Popular Series',
			img: 'sherlock.jpg',
			routerLink: '/series',
		},
		{
			name: 'Movies',
			desc: 'Popular Movies',
			img: 'sicario.jpg',
			routerLink: '/movies',
		},
	];

	public render(): JSX.Element {
		return (
			<Layout title="Popular Titles">
				<div className="grid-area">
					{this.pages.map((page, i) => (
						<GridItem key={i} {...page} />
					))}
				</div>
			</Layout>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePage);
