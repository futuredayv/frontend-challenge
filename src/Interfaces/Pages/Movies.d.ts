//#region Global Imports
import { Props } from 'prop-types';
import { DemoResponse } from '@Interfaces';
//#endregion Global Imports

declare module IMovies {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}

    export interface IState { }

    export interface IStateProps {
        movies?: DemoResponse[];
        err?: string;
        isLoading?: boolean;
        filterOptions: IFetchOptions;
    }

    export interface IFetchOptions {
        search: string;
        sort: {
            by: 'title' | 'releaseYear';
            ordering: 'ASC' | 'DESC';
        };
    }

    export interface IDispatchProps {
        FetchJSON(): Actions.IFetchJSON;
	}

    module Actions {
        export interface IMapPayload { }
        export interface IFetchJSON { }
	}
}
