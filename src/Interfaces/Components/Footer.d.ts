//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace IFooter {
	export interface IProps extends Props<{}> {}

	export interface MenuLink {
		name: string;
		path: string;
	}
}
