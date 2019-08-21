import * as React from 'react';
import { mount } from 'enzyme';
import { Layout } from '@Components';

describe('Components', () => {
	describe('Layout', () => {
		it('should render successfully', () => {
			const children = (
				<article>
					<h1>How a Test Passes</h1>
					<p>Once upon a time in weird JS history...</p>
				</article>
			);

            const wrap = mount(<Layout title="TEST">{children}</Layout>);
            
            expect(wrap.find('Heading').prop('title')).toBe('TEST');
            expect(wrap.find('main').contains(children)).toBeTruthy();
		});
	});
});
