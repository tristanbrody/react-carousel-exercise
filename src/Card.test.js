import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Card from './Card';

it('renders successfully', function () {
	render(<Card />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<Card />);
	expect(asFragment()).toMatchSnapshot();
});
