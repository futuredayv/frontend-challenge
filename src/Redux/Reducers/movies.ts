//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IMovies } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
*/
const INITIAL_STATE: IMovies.IStateProps = { };

type IMapPayload = IMovies.Actions.IMapPayload;

export const MoviesReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
	switch (action.type) {
		case ActionConsts.Movies.SetReducer:
			return {
				...state,
				...action.payload
			};

		case ActionConsts.Movies.ResetReducer:
			return INITIAL_STATE;

		default:
			return state;
	}
};
