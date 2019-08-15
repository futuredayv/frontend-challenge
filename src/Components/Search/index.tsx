//#region Global Imports
import React from 'react';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { ISearch } from '@Interfaces';
//#endregion Interface Imports

export const Search = (props: ISearch.IProps): JSX.Element => (
	<div className="Search">
		<span>Search</span>
	</div>
);
