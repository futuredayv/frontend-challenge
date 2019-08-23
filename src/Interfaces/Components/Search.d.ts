//#region Global Imports
import { Props } from 'prop-types';
import { IMovies } from '@Interfaces/Pages/Movies';
//#endregion Global Imports

declare module ISearch {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}
    
    export interface IState {
        searchActive: boolean;
    }

    export interface IStateProps {
        filterOptions?: IMovies.IFilterOptions;
    }

    export interface IDispatchProps {
        UpdateFilterOptions(payload: any): { }
	}

    module Actions {
	    export interface IMapPayload { }
        export interface IMapResponse { }
	}
}
