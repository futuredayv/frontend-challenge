//#region Interface Imports
import { IHomePage, IMovies } from '@Interfaces';
//#endregion Interface Imports

export interface IStore {
	home: IHomePage.IStateProps;
	movies: IMovies.IStateProps;
}
