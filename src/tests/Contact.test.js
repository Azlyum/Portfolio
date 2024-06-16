import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders Contact component', () => {
  const { getByText } = render(<Contact />);
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('Email: your.email@example.com')).toBeInTheDocument();
});
