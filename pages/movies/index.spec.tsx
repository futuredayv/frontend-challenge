import * as React from 'react';
import { mount } from 'enzyme';
import Movies from '../movies';

import { Provider } from 'react-redux';

import initStore from '@Redux/store';

describe('Movies', () => {
	it('should render without throwing an error', () => {
		const wrap = mount(
			<Provider store={initStore()}>
				<Movies />
			</Provider>,
		);

		expect(wrap).toBeTruthy();
	});
});
