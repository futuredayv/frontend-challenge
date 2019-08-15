//#region Global Imports
import { Props } from 'prop-types';
import { DemoResponse } from '@Interfaces';
//#endregion Global Imports

declare module IMovies {
    export type IProps = IOwnProps & IStateProps & IDispatchProps;

    export interface IOwnProps extends Props<{}> {}

    export interface IState { }

    export interface IStateProps { }

    export interface IDispatchProps {
        FetchJSON(): Actions.IFetchJSON;
	}

    module Actions {
        export interface IFetchJSON { }
	}
}
