import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App Test", () => {

  test('renders App component', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
  
});
