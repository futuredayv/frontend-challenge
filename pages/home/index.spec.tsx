import * as React from 'react';
import { mount } from 'enzyme';
import { HomePage } from '../home';

describe('HomePage', () => {
	it('should render as expected', () => {
		const wrap = mount(<HomePage />);

		expect(wrap.find('.GridItem')).toHaveLength(2);
	});
});
