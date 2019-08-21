import * as React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { SearchComponent } from '@Components';
import { ActionConsts } from '@Definitions';
const mockStore = configureMockStore();

jest.useFakeTimers();

describe('Components', () => {
	describe('Search', () => {
		let mockFn = jest.fn();

		afterEach(() => {
			jest.resetAllMocks();
		});

		it('should dispatch UpdateFilterOptions when TextBox changes', () => {
			const wrap = mount(
				<SearchComponent UpdateFilterOptions={mockFn} />,
			);

			wrap.find('TextBox')
				.instance()
				.handleChange({
					currentTarget: {
						value: 'john',
					},
				});

			jest.runAllTimers();

			expect(mockFn.mock.calls.length).toBe(1);
		});

		it('should dispatch UpdateFilterOptions when DropDown changes', () => {
			const wrap = mount(
				<SearchComponent UpdateFilterOptions={mockFn} />,
			);

			wrap.find('DropDown')
				.instance()
				.select({ name: 'Test', value: 'Value' });

			jest.runAllTimers();

			expect(mockFn.mock.calls.length).toBe(1);
		});
	});
});
