//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare namespace IToast {
	export interface IProps extends Props<{}> {
		isLoading: boolean;
		err: boolean;
	}
}
