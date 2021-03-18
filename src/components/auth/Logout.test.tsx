import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from './Logout';

test('renders learn react link', () => {
  render(<Logout />);
  const linkElement = screen.getByText(/Sign out/i);
  expect(linkElement).toBeInTheDocument();
});
