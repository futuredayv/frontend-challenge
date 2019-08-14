//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module IMovies {
    export interface IProps extends Props<{}> {
  
    }
    export interface IState { }
    export interface IStateProps { }

    module Actions {
	    export interface IMapPayload {
            data?: { };
            err?: string;
        }
		export interface IMapResponse { }
	}
}