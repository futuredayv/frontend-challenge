//#region Global Imports
import React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IFooter } from '@Interfaces';
//#endregion Interface Imports

export const Footer = (props: IFooter.IProps): JSX.Element => (
	<div className="Footer">
		<span>Footer</span>
	</div>
);
