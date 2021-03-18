import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign in with Google/i);
  expect(linkElement).toBeInTheDocument();
});
