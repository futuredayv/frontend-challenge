//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace IHeading {
	export interface IProps extends Props<{}> {
		title: string;
	}

	export interface IState {
		menuPaneActive: boolean
	}
}
