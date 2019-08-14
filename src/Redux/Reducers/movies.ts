//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IMovies } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: IMovies.IStateProps = {};

type IMapPayload = IMovies.Actions.IMapPayload;

export const MoviesReducer = (
	state = INITIAL_STATE,
	action: IAction<IMapPayload>,
) => {
	switch (action.type) {
		case ActionConsts.Movies.SetReducer:
			return {
				...state,
				...action.payload,
			};

		case ActionConsts.Movies.ResetReducer:
			return INITIAL_STATE;

		case ActionConsts.Movies.FetchJSON:
			return {
				...state,
				isLoading: true,
			};

		case ActionConsts.Movies.FetchJSON_SUCCESS:
			const { payload: data } = action;

			return {
				...state,
				isLoading: false,
				data,
			};

		case ActionConsts.Movies.FetchJSON_FAIL:
			const { err } = action.payload;

			return {
				...state,
				isLoading: false,
				err,
			};

		default:
			return state;
	}
};
