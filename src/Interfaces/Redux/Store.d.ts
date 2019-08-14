//#region Interface Imports
import { IHomePage, IMoviesPage } from '@Interfaces';
//#endregion Interface Imports

export interface IStore {
	home: IHomePage.IStateProps;
}
