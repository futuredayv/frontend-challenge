//#region Global Imports
import { Props } from 'prop-types';
import { IMovies } from './Movies';
//#endregion Global Imports

declare namespace ISeries {
	export interface IProps extends IMovies.IProps {}
	export interface IState {}
}
