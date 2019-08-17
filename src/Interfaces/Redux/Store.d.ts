//#region Interface Imports
import { IHomePage, IMovies, ISearch, ISeriesPage } from '@Interfaces';
//#endregion Interface Imports

export interface IStore {
	home: IHomePage.IStateProps;
	movies: IMovies.IStateProps;
	search: ISearch.IStateProps;
}
