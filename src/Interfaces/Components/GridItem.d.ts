//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace IGridItem {
	export interface IProps extends Props<{}> {
		name?: string;
		desc?: string;
		img?: string;
		routerLink?: string;
	}
}
