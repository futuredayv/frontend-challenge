//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module ISearch {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}

    export interface IState {
        searchText: string;
        sortBy: ISortOption;
        isDroppedDown: boolean;
    }

    export interface IStateProps { }

    export interface ISortOption {
        name: string;
        value: string;
    }

    module Actions {
	    export interface IMapPayload { }
		export interface IMapResponse { }
	}
}