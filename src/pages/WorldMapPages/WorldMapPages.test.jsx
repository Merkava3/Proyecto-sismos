import React from 'react';
import { render, screen } from '@testing-library/react';
import WorldMapPages from './WorldMapPages';

// Mock the child to prevent Leaflet from crashing the rendering environment
jest.mock('../../components/WorldMapWithControls/WorldMapWithControls', () => () => (
  <div data-testid="mocked-map-controls">Map Controls Loaded</div>
));

describe('WorldMapPages Component', () => {
  it('debería renderizar el contenedor principal de WorldMapWithControls', () => {
    render(<WorldMapPages />);
    const childComponent = screen.getByTestId('mocked-map-controls');
    expect(childComponent).toBeInTheDocument();
  });
});
