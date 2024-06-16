import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders Header component', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(getByText('My Portfolio')).toBeInTheDocument();
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Projects')).toBeInTheDocument();
  expect(getByText('Skills')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
});
