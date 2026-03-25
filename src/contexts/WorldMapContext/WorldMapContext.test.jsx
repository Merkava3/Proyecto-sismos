import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { WorldMapContext, WorldMapContextProvider } from './WorldMapContext';
import useWMWithControls from '../../hooks/useWMWithControls/useWMWithControls';

jest.mock('../../hooks/useWMWithControls/useWMWithControls', () => {
  return jest.fn();
});

const DummyComponent = () => {
  const context = useContext(WorldMapContext);
  return <div data-testid="dummy">{context?.country}</div>;
};

describe('WorldMapContext', () => {
  it('debería proveer los valores retornados por el hook globalmente', () => {
    // Setup Mock hook to return dummy controls
    useWMWithControls.mockReturnValue({ country: 'Japón' });

    render(
      <WorldMapContextProvider>
        <DummyComponent />
      </WorldMapContextProvider>
    );

    const dummy = screen.getByTestId('dummy');
    expect(dummy.textContent).toBe('Japón');
  });
});
