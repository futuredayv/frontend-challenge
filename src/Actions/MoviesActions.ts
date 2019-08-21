import 'isomorphic-unfetch';
import { Dispatch } from 'redux';
// import getConfig from 'next/config';

import { ActionConsts } from '@Definitions';
import { DemoResponse } from '@Interfaces';

// nock can NOT replace next config.
// process.env is NOT available on browser.
//
// const {
// 	publicRuntimeConfig: { SAMPLE_JSON },
// } = getConfig();

const base = 'https://raw.githubusercontent.com/';
const json = 'futuredayv/frontend-challenge/master/feed/sample.json';

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
			const result = await fetch(base+json);
			const { entries } = await result.json();

			const [movies, series] = groupByProgramType(entries);

			setTimeout(() => {
				dispatch({
					type: ActionConsts.Movies.FetchJSON_SUCCESS,
					payload: { movies, series, isLoading: false },
				});
			}, 2000);
		} catch (err) {
			dispatch({
				type: ActionConsts.Movies.FetchJSON_FAIL,
				payload: { err: `Error: ${err}`, isLoading: false },
			});
		}
	},
};

const groupByProgramType = (entries: DemoResponse[]) =>
	['movie', 'series'].map(programType =>
		entries.filter(e => e.programType === programType),
	);
