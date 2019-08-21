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
// import { Layout, GridItem } from '@Components';
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
			img:
				'https://streamcoimg-a.akamaihd.net/000/109/1/1091-PosterArt-bbcf03acc18eebfc343754b05f39738f.jpg',
			routerLink: '/series',
		},
		{
			name: 'Movies',
			desc: 'Popular Movies',
			img:
				'https://streamcoimg-a.akamaihd.net/000/376/201/376201-PosterArt-4f91ac739ae5147a51ae3abc78d55f2d.jpg',
			routerLink: '/movies',
		},
	];

	public render(): JSX.Element {
		return (
			<Layout title="Popular Titles">
				<section className="Home">
					<div className="grid-area">
						{this.pages.map((page, i) => (
							<GridItem key={i} {...page} />
						))}
					</div>
				</section>
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
