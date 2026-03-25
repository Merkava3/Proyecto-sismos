import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

// Mocking ButtonModal so we can control clicks predictably isolated from its logic
jest.mock('../ButtonModal/ButtonModal', () => {
  return function DummyButtonModal(props) {
    return <button onClick={props.Click} data-testid="mock-button">{props.title}</button>;
  };
});

describe('Modal Component', () => {

  const scaleInfo = {
    color: '#F1C40F',
    number: '5.8',
    msg: 'Sentido por algunas personas dentro de edificios'
  };

  it('deberían estar los textos y el modal ocultos inicialmente', () => {
    render(<Modal movimiento={false} scaleInfo={null} showModal={false} />);
    const mockButton = screen.getByTestId('mock-button');
    expect(mockButton).toBeInTheDocument();
  });

  it('debería mostrar la info del sismo cuando showModal=true, movimiento=true y se hace click en su botón', async () => {
    const user = userEvent.setup();
    render(<Modal movimiento={true} scaleInfo={scaleInfo} showModal={true} />);

    // Initially closed (or showing with blank background depending on CSS, but it has isModalVisible logic)
    const button = screen.getByTestId('mock-button');
    await user.click(button);

    const titleScale = screen.getByRole('heading', { level: 1, name: /escala ritcher/i });
    expect(titleScale).toBeInTheDocument();

    const magnitude = screen.getByText('5.8');
    expect(magnitude).toBeInTheDocument();

    const resultMessage = screen.getByRole('heading', { level: 3, name: /dentro de edificios/i });
    expect(resultMessage).toBeInTheDocument();
  });
});
