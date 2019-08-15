//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module ISearch {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}

    export interface IState {
        searchText: string;
    }

    export interface IStateProps { }

    module Actions {
	    export interface IMapPayload { }
		export interface IMapResponse { }
	}
}