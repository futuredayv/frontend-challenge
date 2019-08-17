//#region Global Imports
import { Props } from 'prop-types';
import { IMovies } from './Movies';
import { DemoResponse } from '@Interfaces/Services/API/DemoStreaming/DemoResponse';
//#endregion Global Imports

declare module ISeries {
    export interface IProps extends IMovies.IProps {
        series: DemoResponse[];
    };
    export interface IState { };
}
