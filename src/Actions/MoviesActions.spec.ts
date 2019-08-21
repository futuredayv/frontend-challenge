import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MoviesActions } from './MoviesActions';
import { ActionConsts } from '@Definitions';
// import fetchMock from 'fetch-mock';
import getConfig from 'next/config';

const {
	publicRuntimeConfig: { SAMPLE_JSON },
} = getConfig();

const mockStore = configureMockStore([thunk]);

describe('Actions', () => {
	describe('Movies Actions', () => {
		it('should end up with FetchJSON_SUCCESS after fetch', () => {

            const expectedState = {
                isLoading: false,
                testProp: 'bla'
            }

			const store = mockStore({});

			store
				.dispatch(MoviesActions.TestFlight())
				.then(expect(store.getState()).toEqual(expectedState))
				.catch(err => console.log(`We messed! ${err}`));
		});
	});
});
