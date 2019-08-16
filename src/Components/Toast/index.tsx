//#region Global Imports
import React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IToast } from '@Interfaces';
//#endregion Interface Imports

export const Toast = (props: IToast.IProps): JSX.Element => (
	<div className="Toast">
		<span>Toast</span>
	</div>
);
