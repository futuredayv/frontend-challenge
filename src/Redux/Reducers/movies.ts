//#region Local Imports
import { ActionConsts } from '@Definitions';
//#endregion Local Imports

//#region Interface Imports
import { IAction, IMovies } from '@Interfaces';
//#endregion Interface Imports

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: IMovies.IStateProps = {
	movies: [],
	isLoading: true,
	err: '',
	filterOptions: {
		search: '',
		sort: {
			by: 'title',
			ordering: 'ASC'
		}
	}
};

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
			const { payload: movies } = action;

			return {
				...state,
				isLoading: false,
				movies,
			};

		case ActionConsts.Movies.FetchJSON_FAIL:
			const { payload: err } = action;

			return {
				...state,
				isLoading: false,
				err,
			};

		case ActionConsts.Search.UpdateFilterOptions:
			const { payload: filterOptions } = action;

			return {
				...state,
				filterOptions: {
					...state.filterOptions,
					...filterOptions
				}
			}

		default:
			return state;
	}
};
