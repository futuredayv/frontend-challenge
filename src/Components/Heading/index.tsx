//#region Global Imports
import * as React from 'react';
import Link from 'next/link';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
import { MenuIcon } from '../../Assets/icons';
//#endregion Local Imports

//#region Interface Imports
import { IHeading } from '@Interfaces';
//#endregion Interface Imports

export class Heading extends React.Component<IHeading.IProps, IHeading.IState> {
	constructor(props: IHeading.IProps) {
		super(props);

		this.state = {
			menuPaneActive: false,
		};
	}

	navLinks: IHeading.INavLink[] = [
		{ name: 'Movies', routerLink: '/movies' },
		{ name: 'Series', routerLink: '/series' },
		{ name: 'Login' },
		{ name: 'Start Your Free Trial', cta: true },
	];

	toggleMenuPane = () => {
		this.setState(state => ({
			menuPaneActive: !state.menuPaneActive,
		}));
	};

	getStatefulClass = () => (this.state.menuPaneActive ? 'active' : '');

	renderNav = () =>
		this.navLinks.map(({ name, routerLink, cta }, i) => (
			<Link href={routerLink} key={i}>
				<div className={`menu-item ${cta ? 'cta' : ''}`}>{name}</div>
			</Link>
		));

	public render(): JSX.Element {
		return (
			<header>
				<div className="placeholder" />
				<div className="header">
					<div className="header__main">
						<div className="container">
							<Link href="/">
								<div className="brand">DEMO Streaming</div>
							</Link>

							<div className="menu-toggle icon">
								<MenuIcon onClick={this.toggleMenuPane} />
							</div>

							<div
								className={`nav-pane ${this.getStatefulClass()}`}
							>
								<nav>{this.renderNav()}</nav>
								<div
									className="nav-pane__underlay"
									onClick={this.toggleMenuPane}
								/>
							</div>
						</div>
					</div>

					<div className="header__sub">
						<div className="container">
							<div className="header__sub__title">
								{this.props.title}
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
