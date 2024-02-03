import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LinkedIn link', () => {
  render(<App />);
  const linkElement = screen.getByText("linkedin.com/in/schyler-evans");
  expect(linkElement).toBeInTheDocument();
});
