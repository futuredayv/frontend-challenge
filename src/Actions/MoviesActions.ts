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
			const result = await fetch('https://raw.githubusercontent.com/futuredayv/frontend-challenge/master/feed/sample.json');
			const { entries } = await result.json();

			dispatch({
				type: ActionConsts.Movies.FetchJSON_SUCCESS,
				payload: entries,
			});
		} catch (err) {
			dispatch({
				type: ActionConsts.Movies.FetchJSON_FAIL,
				payload: err,
			});
		}
	},
};
