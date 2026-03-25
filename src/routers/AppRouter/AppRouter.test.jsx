import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from './AppRouter';

// Need to mock inner heavy routes and Leaflet maps to prevent crashes during pure router testing
jest.mock('../../components/Home/Home', () => () => <div data-testid="home-route">Home</div>);
jest.mock('../../pages/WorldMapPages/WorldMapPages', () => () => <div data-testid="map-route">Map</div>);

describe('AppRouter', () => {
  it('debería renderizar la barra de navegación y la vista Home por defecto', () => {
    // Note: Render wraps this in actual BrowserRouter because it's inside AppRouter component.
    // In a real isolated environment, you usually test routes dynamically with memory router,
    // but here we just check if it mounts without errors.
    render(<AppRouter />);
    
    // Check navigation items
    const navText = screen.getByText('Sistema de Sismos');
    const homeRoute = screen.getByTestId('home-route');
    
    expect(navText).toBeInTheDocument();
    expect(homeRoute).toBeInTheDocument();
  });
});
