import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MoviesActions } from './MoviesActions';
import { ActionConsts } from '@Definitions';
import * as nock from 'nock';

const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
	describe('Movies Actions', () => {
		let store: MockStoreEnhanced<any>;

		beforeEach(() => {
			store = mockStore({});
		});

		afterEach(() => {
			nock.cleanAll();
		});

		it('should end up with FetchJSON_SUCCESS after fetch', () => {
			const expectedActions = [
				{ type: ActionConsts.Movies.FetchJSON },
				{
					type: ActionConsts.Movies.FetchJSON_SUCCESS,
					payload: {
						movies: [{ title: 'John Wick', programType: 'movie' }],
						series: [{ title: 'Sherlock', programType: 'series' }],
					},
				},
			];

			nock(process.env.SAMPLE_JSON)
				.get('')
				.reply(200, {
					entries: [
						{ title: 'John Wick', programType: 'movie' },
						{ title: 'Sherlock', programType: 'series' },
					],
				});

			store
				.dispatch(MoviesActions.FetchJSON())
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				})
				.catch(() => null);
		});
	});
});
