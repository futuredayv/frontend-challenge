//#region Global Imports
import * as React from 'react';
import Link from 'next/link';
//#endregion Global Imports

import './style.scss';

//#region Interface Imports
import { IFooter } from '@Interfaces';
//#endregion Interface Imports

import * as Icons from '../../Assets/icons';

const footerMenu: IFooter.MenuLink[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Terms and Conditions', path: '/' },
	{ name: 'Privacy Policy', path: '/' },
	{ name: 'Collection Statement', path: '/' },
	{ name: 'Help', path: '/' },
	{ name: 'Manage Account', path: '/' },
];

export const Footer: React.FunctionComponent<IFooter.IProps> = (
	props: IFooter.IProps,
): JSX.Element => (
	<footer>
		<div className="container">
			<div className="footer__menu">
				{footerMenu.map(({ name, path }, i) => (
					<div className="menu-item" key={i}>
						<Link href={path}>
							<a>{name}</a>
						</Link>
					</div>
				))}
			</div>

			<div className="footer__copyright">
				Copyright © {new Date().getUTCFullYear()} DEMO Streaming. All Rights Reserved.
			</div>

			<div className="footer__backlinks">
				<div className="social">
					<Link href="https://facebook.com/futuredayv">
						<a>
							<Icons.FacebookIcon className="icon" />
						</a>
					</Link>
					<Link href="https://twitter.com">
						<a>
							<Icons.TwitterIcon className="icon" />
						</a>
					</Link>
					<Link href="https://instagram.com/acar.digital">
						<a>
							<Icons.InstagramIcon className="icon" />
						</a>
					</Link>
				</div>

				<div className="marketplace">
					<Link href="https://apple.com">
						<a>
							<Icons.AppStoreIcon className="badge" />
						</a>
					</Link>
					<Link href="https://google.com">
						<a>
							<Icons.GooglePlayIcon className="badge" />
						</a>
					</Link>
					<Link href="https://microsoft.com">
						<a>
							<Icons.MSStoreIcon className="badge" />
						</a>
					</Link>
				</div>
			</div>
		</div>
	</footer>
);
