import { ActionConsts } from '@Definitions';

import { MoviesReducer, INITIAL_STATE } from './movies';

describe('Reducers', () => {
	describe('Movies Reducer', () => {
		it('should handle FetchJSON', () => {
			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON,
				}),
			).toMatchSnapshot()
		});

		it('should handle FetchJSON_SUCCESS', () => {
			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON_SUCCESS,
					payload: {
						movies: [{ title: 'John Wick' }],
						series: [{ title: 'Sherlock' }],
					}
				}),
			).toMatchSnapshot()
		});

		it('should handle Fetch_JSON_FAIL', () => {
			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Movies.FetchJSON_FAIL,
					payload: {
						isLoading: false,
						err: 'Oops! Something Went Wrong.',
					}
				}),
			).toMatchSnapshot()
		});

		it('should handle UpdateFilterOptions', () => {
			expect(
				MoviesReducer(INITIAL_STATE, {
					type: ActionConsts.Search.UpdateFilterOptions,
					payload: {
						search: 'john',
						sort: {
							by: 'title',
							ordering: 'ASC',
						},
					},
				}),
			).toMatchSnapshot()
		});
	});
});
