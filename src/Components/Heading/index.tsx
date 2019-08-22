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

	toggleMenuPane = () => {
		this.setState(state => ({
			menuPaneActive: !state.menuPaneActive,
		}));
	};

	public render(): JSX.Element {
		return (
			<header>
				<div className="header__main">
					<div className="container">
						<Link href="/">
							<div className="brand">DEMO Streaming</div>
						</Link>

						<div className="menu-toggle icon">
							<MenuIcon onClick={this.toggleMenuPane} />
						</div>

						<div className={`nav-pane ${this.state.menuPaneActive ? 'active': ''}`}>
							<nav>
								<div className="menu-item">Login</div>
								<div className="menu-item cta shadow-radius-box">
									Start Your Free Trial
								</div>
							</nav>
							<div className="nav-pane__underlay" onClick={this.toggleMenuPane} />
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
			</header>
		);
	}
}
