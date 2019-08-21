import { ActionConsts } from '@Definitions';

import { MoviesReducer, INITIAL_STATE } from './movies';

describe('Reducers', () => {
	describe('Movies Reducer', () => {
		it('should handle FetchJSON', () => {
			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON,
				}),
			).toEqual({ ...INITIAL_STATE, isLoading: true });
		});

		it('should handle FetchJSON_SUCCESS', () => {
			const payload = {
				movies: [{ title: 'John Wick' }],
				series: [{ title: 'Sherlock' }],
			};

			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON_SUCCESS,
					payload,
				}),
			).toEqual({ ...INITIAL_STATE, ...payload });
		});

		it('should handle Fetch_JSON_FAIL', () => {
			const payload = {
				isLoading: false,
				err: 'Oops! Something Went Wrong.',
			};

			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON_FAIL,
					payload,
				}),
			).toEqual({ ...INITIAL_STATE, ...payload });
		});

		it('should handle UpdateFilterOptions', () => {
			const payload = {
				search: 'john',
				sort: {
					by: 'title',
					ordering: 'ASC',
				},
			};

			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Search.UpdateFilterOptions,
					payload,
				}),
			).toEqual({
				...INITIAL_STATE,
				filterOptions: {
					...INITIAL_STATE.filterOptions,
					...payload,
				},
			});
		});
	});
});
