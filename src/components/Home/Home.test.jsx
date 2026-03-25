import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

// Mock the Link component from react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>
}));

describe('Home Component', () => {
  it('debería renderizar la tabla de historial de sismos', () => {
    render(<Home />);
    
    // Check for the table headers specific to Home component
    expect(screen.getByText('Magnitud')).toBeInTheDocument();
    expect(screen.getByText('Fecha')).toBeInTheDocument();
  });
});
