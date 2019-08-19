import * as React from 'react';
import { shallow } from 'enzyme';
import { Heading } from '@Components';

describe('Components', () => {
	describe('Heading', () => {
		it('should render and print title', () => {
			const expectedTitle = `Well, Let's Head This`;

			const wrap = shallow(<Heading title={expectedTitle} />);

			expect(wrap.find('.header__sub__title').exists()).toBe(true);
		});
	});
});
