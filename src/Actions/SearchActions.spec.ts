import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { SearchActions } from './SearchActions';
import { ActionConsts } from '@Definitions';

const mockStore = configureMockStore();

describe('Actions', () => {
	describe('Search Actions', () => {
		let store: MockStoreEnhanced<any>;

		beforeEach(() => {
			store = mockStore({});
		});

		it('UpdateFilterOptions test against store', () => {
            const payload = {
                search: 'john',
                sort: {
                    by: 'title',
                    ordering: 'ASC',
                },
            };

			const expectedActions = [
				{
                    type: ActionConsts.Search.UpdateFilterOptions,
                    payload
				},
			];

			store.dispatch(
				SearchActions.UpdateFilterOptions(payload),
			);

			expect(store.getActions()).toEqual(expectedActions);
        });
	});
});
