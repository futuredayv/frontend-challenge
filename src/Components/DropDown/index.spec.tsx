import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { DropDown } from '@Components';

describe('Components', () => {
	describe('DropDown', () => {
		let wrap: ReactWrapper<DropDown>;

		const items = [
			{ name: 'Somebody', value: 'please!' },
			{ name: 'get this man', value: 'a gun.' },
		];

		const spied = jest.fn();

		beforeEach(() => {
			wrap = mount(<DropDown items={items} onChange={spied} />);
			spied.mockReset();
		});

		it('should render successfully', () => {
			expect(wrap).toBeTruthy();
		});

		it('should filter out current item from list', () => {
			const selectedItem = wrap.state('selectedItem');

			expect(
				wrap
					.find('.dropdown__item')
					.filter(i => i.text() !== selectedItem.name).length,
			).toBe(0);
		});

		it('should setState and call onChange on select', () => {
			wrap.find('.dropdown__item')
				.first()
				.simulate('click');

			expect(spied).toBeCalled();
			expect(spied).toBeCalledWith(items[1]);
			expect(wrap.state('selectedItem')).toBe(items[1]);
		});

		it('should toggleDropDown', () => {
			const control = wrap.find('.DropDown').childAt(0);

			control.simulate('click');

			expect(
				control.getDOMNode().className.includes('dropped') &&
					wrap.state('isDroppedDown'),
			).toBeTruthy();

			control.simulate('click');

			expect(
				control.getDOMNode().className.includes('dropped') &&
					wrap.state('isDroppedDown'),
			).toBeFalsy();
		});
	});
});
