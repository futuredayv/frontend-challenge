//#region Global Imports
import { Props } from 'prop-types';
import { IMovies } from '@Interfaces';
//#endregion Global Imports

declare module ISearch {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}

    export interface IState {
        searchText: string;
        sortBy: string;
    }

    export interface IStateProps { }

    export interface IDispatchProps {
        UpdateFilterOptions(payload: IMovies.IFetchOptions): { }
	}

    module Actions {
	    export interface IMapPayload { }
        export interface IMapResponse { }
	}
}
