import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Quakerecient from './Quakerecient';
import GeoApi from '../../services/GeoApi/GeoApi';

jest.mock('../../services/GeoApi/GeoApi');
jest.mock('../Load/Load', () => () => <div data-testid="mock-load">Cargando</div>);

describe('Quakerecient Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería mostrar estado de carga inicialmente', () => {
    // Configurar API para nunca resolver inmediatamente así vemos el loader
    GeoApi.mockImplementation(() => ({
      getDataWithCaching: () => new Promise(() => {}) 
    }));
    
    render(<Quakerecient />);
    expect(screen.getByTestId('mock-load')).toBeInTheDocument();
  });

  it('debería mostrar estado vacío si la API retorna show=false', async () => {
    GeoApi.mockImplementation(() => ({
      getDataWithCaching: jest.fn().mockResolvedValue({ result: [], show: false })
    }));

    render(<Quakerecient />);
    
    await waitFor(() => {
      expect(screen.getByText(/no se encontraron sismos/i)).toBeInTheDocument();
    });
  });

  it('debería mostrar los datos del sismo si es exitoso', async () => {
    const mockData = [{ title: 'Sismo Fuerte', magnitude: 4.5, city: 'Bogotá' }];
    
    GeoApi.mockImplementation(() => ({
      getDataWithCaching: jest.fn().mockResolvedValue({ result: mockData, show: true })
    }));

    render(<Quakerecient />);
    
    await waitFor(() => {
      expect(screen.getByText('Sismo Fuerte')).toBeInTheDocument();
      expect(screen.getByText(/4.5/)).toBeInTheDocument();
      expect(screen.getByText(/Bogotá/)).toBeInTheDocument();
    });
  });
});
