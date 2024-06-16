import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../components/Skills';

test('renders Skills component', () => {
  const { getByText } = render(<Skills />);
  expect(getByText('Skills')).toBeInTheDocument();
  expect(getByText('Programming Languages: JavaScript, TypeScript')).toBeInTheDocument();
});
