//#region Global Imports
import { Props } from 'prop-types';
//#endregion Global Imports

declare module ISeries {
    export interface IProps extends Props<{}> {
  
    }
    export interface IState { }
    export interface IStateProps { }

    module Actions {
	    export interface IMapPayload { }
		export interface IMapResponse { }
	}
}