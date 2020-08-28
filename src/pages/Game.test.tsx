import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

test('renders title', () => {
  const { getByText } = render(<Game />);
  const titleElement = getByText(/拼图小游戏/i);
  expect(titleElement).toBeInTheDocument();
});
