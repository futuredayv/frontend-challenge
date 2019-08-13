//#region Global Imports
import React from 'react';
import Link from 'next/link';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IFooter } from '@Interfaces';
//#endregion Interface Imports

type MenuLink = {
	name: string;
	path: string;
}

const footerMenu: MenuLink[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Terms and Conditions', path: '/' },
	{ name: 'Privacy Policy', path: '/' },
	{ name: 'Collection Statement', path: '/' },
	{ name: 'Help', path: '/' },
	{ name: 'Manage Account', path: '/' }
]


export const Footer: React.FunctionComponent<IFooter.IProps> = (
	props: IFooter.IProps
): JSX.Element => (
	<footer>
		<div className="footer__menu">
			{footerMenu.map(({name, path}, i) => (
				<div className="menu-item" key={i}>
					<Link href={path}>
						<a>{name}</a>
					</Link>
				</div>
			))}
		</div>

		<div className="footer__copyright"></div>

		<div className="footer__backlinks"></div>
	</footer>
);
