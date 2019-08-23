//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace ITextBox {
	export interface IProps extends Props<{}> {
		debounce: number;
		minLength: number;
		onChange: (text: string) => any;
	}
	export interface IState {
		text: string;
	}
	export interface IStateProps {}
}
