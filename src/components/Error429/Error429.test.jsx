import React from 'react';
import { render, screen } from '@testing-library/react';
import Error429 from './Error429';

describe('Error429 Component', () => {
  it('debería renderizar la ventana de advertencia de rate limits', () => {
    render(<Error429 />);
    
    // Check titles and specific generic wording
    const requestHeader = screen.getByRole('heading', { name: /error 429/i });
    expect(requestHeader).toBeInTheDocument();
    
    const description = screen.getByText(/el servidor está sobrecargado/i);
    expect(description).toBeInTheDocument();

    const emoji = screen.getByRole('img', { name: /alerta/i });
    expect(emoji).toBeInTheDocument();
  });
});
