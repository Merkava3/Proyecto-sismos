import calculatorReducer, { setAmplitud, setDiferencia, calculateSis, resetCalculator } from './calculatorSlice';

// We mock Sismos and TableScale so we don't depend on them
jest.mock('../../utils/Sismos', () => {
  return jest.fn().mockImplementation(() => {
    return {
      force: jest.fn().mockReturnValue(6.5)
    };
  });
});

jest.mock('../../utils/TableScale', () => {
  return jest.fn().mockReturnValue({
    color: '#D68910',
    number: '6.5',
    msg: 'mock message'
  });
});

describe('Calculator Redux Slice', () => {
  const initialState = {
    amplitud: '',
    diferencia: '',
    movimiento: null,
    scaleInfo: null,
  };

  it('debería retornar el estado inicial', () => {
    expect(calculatorReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('debería manejar setAmplitud', () => {
    const state = calculatorReducer(initialState, setAmplitud('50'));
    expect(state.amplitud).toBe('50');
  });

  it('debería manejar setDiferencia', () => {
    const state = calculatorReducer(initialState, setDiferencia('120'));
    expect(state.diferencia).toBe('120');
  });

  it('debería manejar calculateSis y limpiar inputs', () => {
    const startState = {
      ...initialState,
      amplitud: '50',
      diferencia: '120'
    };

    const state = calculatorReducer(startState, calculateSis());
    
    // Inputs must be cleared
    expect(state.amplitud).toBe('');
    expect(state.diferencia).toBe('');
    
    // Results must be stored
    expect(state.scaleInfo).toEqual({
      color: '#D68910',
      number: '6.5',
      msg: 'mock message'
    });
  });

  it('debería manejar resetCalculator', () => {
    const startState = {
      amplitud: '50',
      diferencia: '120',
      movimiento: { mock: true },
      scaleInfo: { color: 'red' }
    };

    expect(calculatorReducer(startState, resetCalculator())).toEqual(initialState);
  });
});
