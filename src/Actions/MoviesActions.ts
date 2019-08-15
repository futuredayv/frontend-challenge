import 'isomorphic-unfetch';
import { Dispatch } from 'redux';
import getConfig from 'next/config';

import { ActionConsts } from '@Definitions';
// import { DemoResponse } from '@Interfaces';

const {
	publicRuntimeConfig: { SAMPLE_JSON },
} = getConfig();

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
			const result = await fetch(SAMPLE_JSON);
			const { entries } = await result.json();

			dispatch({
				type: ActionConsts.Movies.FetchJSON_SUCCESS,
				payload: entries,
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: ActionConsts.Movies.FetchJSON_FAIL,
				payload: err,
			});
		}
	},
};
