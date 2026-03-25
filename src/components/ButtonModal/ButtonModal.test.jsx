import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonModal from './ButtonModal';

describe('ButtonModal Componet', () => {
  it('debería renderizar correcamente con los props base', () => {
    render(<ButtonModal type="button" title="Abir Calculadora" id="btn-calc" />);
    const button = screen.getByRole('button', { name: /abir calculadora/i });
    
    expect(button).toBeInTheDocument();
  });

  it('debería ejecutar la función Click cuando se presiona', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();

    render(<ButtonModal title="Click Me" Click={mockOnClick} />);
    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
