import { renderHook, act } from '@testing-library/react';
import useWMWithControls from './useWMWithControls';

// Mock GeoApi
jest.mock('../../services/GeoApi/GeoApi', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getDataWithCaching: jest.fn().mockResolvedValue({ result: ['mock'], show: false })
    };
  });
});

describe('useWMWithControls Hook', () => {
  it('debería inicializar con los estados por defecto', () => {
    const { result } = renderHook(() => useWMWithControls());
    expect(result.current.country).toBe('Afganistán'); // Default (first in array)
    expect(result.current.loading).toBe(false);
    expect(result.current.Units).toBe('kilometers');
  });

  it('debería controlar incremento y decremento con limites', () => {
    const { result } = renderHook(() => useWMWithControls());

    act(() => {
      result.current.handleDecrement({ preventDefault: jest.fn() });
    });
    expect(result.current.Counter).toBe(4);

    act(() => {
      result.current.handleIncrement({ preventDefault: jest.fn() });
    });
    act(() => {
      result.current.handleIncrement({ preventDefault: jest.fn() });
    });
    expect(result.current.Counter).toBe(6);
  });

  it('debería cambiar unidades al disparar HandleMiles y HandleKM', () => {
    const { result } = renderHook(() => useWMWithControls());
    
    act(() => {
      result.current.HandleMiles();
    });
    expect(result.current.Units).toBe('miles');
    expect(result.current.Miles).toBe(true);
    expect(result.current.Km).toBe(false);

    act(() => {
      result.current.HandleKM();
    });
    expect(result.current.Units).toBe('kilometers');
    expect(result.current.Miles).toBe(false);
    expect(result.current.Km).toBe(true);
  });
});
