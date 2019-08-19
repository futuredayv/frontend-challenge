import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import TextBox from '../TextBox';

const props = {
	debounce: 300,
	minLength: 3,
	onChange: jest.fn(),
};

const changeEventArgs = {
	currentTarget: {
		value: 'qwe',
	},
};

const times = (count: number) => Array(count).fill('');

describe('TextBox', () => {
	it('should be mounted successfully', () => {
		const wrap = mount(<TextBox {...props} />);
		expect(wrap).toBeTruthy();
	});

	it('should handle changes', () => {
		const wrap = mount(<TextBox {...props} />);

		const spied = jest.spyOn(wrap.instance(), 'handleChange');

		wrap.instance().forceUpdate();

		for (const letter of times(props.minLength)) {
			wrap.find('input').simulate('change', {
				currentTarget: { value: `${wrap.state('text')}i` },
			});
		}

		expect(spied).toBeCalled();
	});
});
