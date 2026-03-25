import { renderHook, act } from '@testing-library/react';
import RichterHook from './RichterHook';
import TableScale from '../../utils/TableScale';
import Sismos from '../../utils/Sismos';

// Mock dependencies
jest.mock('../../utils/Sismos');
jest.mock('../../utils/TableScale');

describe('RichterHook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería inicializar con los estados por defecto', () => {
    const { result } = renderHook(() => RichterHook());
    expect(result.current.amplitud).toBe('');
    expect(result.current.diferencia).toBe('');
    expect(result.current.movimiento).toBeNull();
    expect(result.current.scaleInfo).toBeNull();
    expect(result.current.Empty()).toBe(false);
  });

  it('debería actualizar amplitud y diferencia', () => {
    const { result } = renderHook(() => RichterHook());
    
    act(() => {
      result.current.setAmplitud('50');
      result.current.setDiferencia('120');
    });

    expect(result.current.amplitud).toBe('50');
    expect(result.current.diferencia).toBe('120');
    expect(result.current.Empty()).toBe(true);
  });

  it('debería procesar HandleSubmit correctamente', () => {
    const mockForce = jest.fn().mockReturnValue(6.5);
    Sismos.mockImplementation(() => ({ force: mockForce }));
    TableScale.mockReturnValue({ color: 'orange', number: '6.5', msg: 'test' });
    
    const { result } = renderHook(() => RichterHook());
    
    act(() => {
      result.current.setAmplitud('100');
      result.current.setDiferencia('200');
    });

    // Mock form event
    const mockEvent = { preventDefault: jest.fn() };
    
    act(() => {
      result.current.HandleSubmit(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(Sismos).toHaveBeenCalledWith('100', '200');
    expect(TableScale).toHaveBeenCalledWith(6.5);
    expect(result.current.scaleInfo).toEqual({ color: 'orange', number: '6.5', msg: 'test' });
    
    // Validar reseteo post-submit
    expect(result.current.amplitud).toBe('');
    expect(result.current.diferencia).toBe('');
  });
});
