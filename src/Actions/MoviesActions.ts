import { ActionConsts } from '@Definitions';
import { Dispatch } from 'redux';
// import { DemoResponse } from '@Interfaces';

/**
 * ACTIONS
 */
export const MoviesActions = {
	Map: (payload: any) => ({
		payload,
		type: ActionConsts.Movies.SetReducer,
	}),

	Reset: () => ({
		type: ActionConsts.Movies.ResetReducer,
	}),

	FetchJSON: () => async (dispatch: Dispatch) => {
		dispatch({ type: ActionConsts.Movies.FetchJSON });

		try {
			const result = await fetch('/api/feed.json');
			const data = await result.json();

			dispatch({
				type: ActionConsts.Movies.FetchJSON_SUCCESS,
				payload: data,
			});
		} catch (err) {
			dispatch({
				type: ActionConsts.Movies.FetchJSON_FAIL,
				payload: { err },
			});
		}
	},
};
