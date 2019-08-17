//#region Global Imports
import * as React from 'react';
import Link from 'next/link';
//#endregion Global Imports

//#region Local Imports
import './style.scss';
//#endregion Local Imports

//#region Interface Imports
import { IHeading } from '@Interfaces';
//#endregion Interface Imports

export class Heading extends React.Component<IHeading.IProps, IHeading.IState> {
	public render(): JSX.Element {
		return (
			<header>
				<div className="header__main">
					<div className="container">
						<Link href="/">
							<div className="brand">DEMO Streaming</div>
						</Link>

						<nav>
							<div className="menu-item">Login</div>
							<div className="menu-item cta shadow-radius-box">Start Your Free Trial</div>
						</nav>
					</div>
				</div>

				<div className="header__sub">
					<div className="container">
						<div className="header__sub__title">{this.props.title}</div>
					</div>
				</div>
			</header>
		);
	}
}
