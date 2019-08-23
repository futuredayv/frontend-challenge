import * as React from 'react';
import { mount } from 'enzyme';
import { GridItem } from '@Components';

jest.useFakeTimers();

describe('Components', () => {
	describe('GridItem', () => {
		it('should render successfully', () => {
			const model = {
				name: 'TEST',
				desc: 'is going to be tested.',
				img:
					'https://hackernoon.com/hn-images/1*bs6W6c6yYS36PcD9joLVtw.png',
			};

			const wrap = mount(<GridItem {...model} />);

			expect(wrap.find('.GridItem').hasClass('loaded')).toBeFalsy();
			expect(wrap.find('.GridItem__Desc').text()).toBe('loading...');

			wrap.find('img').simulate('load');

			expect(wrap.find('.GridItem').hasClass('loaded')).toBeTruthy();
			expect(wrap.find('.GridItem__Desc').text()).toBe(model.desc);
		});
	});
});
