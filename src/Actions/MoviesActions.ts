import 'isomorphic-unfetch';
import { Dispatch } from 'redux';
import getConfig from 'next/config';

import { ActionConsts } from '@Definitions';
import { DemoResponse } from '@Interfaces';

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

			const payload = groupByProgramType(entries);

			setTimeout(() => {
				dispatch({
					type: ActionConsts.Movies.FetchJSON_SUCCESS,
					payload,
				});
			}, 2000);
		} catch (err) {
			dispatch({
				type: ActionConsts.Movies.FetchJSON_FAIL,
				payload: `Error: ${err}`,
			});
		}
	},
};

const groupByProgramType = (entries: DemoResponse[]) =>
	['movie', 'series'].map(programType => {
		entries.filter(e => e.programType === programType);
	});
