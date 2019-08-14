//#region Global Imports
import { Props } from 'prop-types';
import { DemoResponse } from '@Interfaces';
//#endregion Global Imports

declare module IMovies {
    export interface IProps extends Props<{}> {
        movies: {
            data: DemoResponse[];
            err: string;
            isLoading: boolean;
        }

        FetchJSON;
    }
    export interface IState { }
    export interface IStateProps { }

    module Actions {
	    export interface IMapPayload { }
		export interface IMapResponse { }
	}
}
