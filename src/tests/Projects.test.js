import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../components/Projects';

test('renders Projects component', () => {
  const { getByText } = render(<Projects />);
  expect(getByText('Projects')).toBeInTheDocument();
  expect(getByText(/BT:/)).toBeInTheDocument();
  expect(getByText(/NHS:/)).toBeInTheDocument();
  expect(getByText(/Sky:/)).toBeInTheDocument();
});
