import * as React from 'react';
import { mount } from 'enzyme';
import { Toast } from '@Components';
import { IToast } from '@Interfaces';

const loadingProps: IToast.IProps = {
	isLoading: true,
	err: false,
};

const errorProps: IToast.IProps = {
	isLoading: false,
	err: true,
};

describe('Components', () => {
	describe('Toast', () => {
		it('should load successfully', () => {
			const wrap = mount(<Toast {...loadingProps} />);

			expect(wrap.find('h4').text()).toBe('Loading');
			expect(wrap.find('.quote').exists()).toBeTruthy();
		});

		it('should errors in a decent way', () => {
			const wrap = mount(<Toast {...errorProps} />);

			expect(wrap.find('.error').exists()).toBeTruthy();
			expect(wrap.find('h4').text()).toBe('Error');
		});
	});
});
