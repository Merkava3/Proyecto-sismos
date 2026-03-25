import quakeMapReducer, { setInputValue, clearInputValue, setSelectedOption } from './quakeMapSlice';

describe('QuakeMap Redux Slice', () => {
  const initialState = {
    inputValues: ['', '', '', '', '', '', '', '', ''],
    selectedOption: 'kilometers',
    place: [],
    loading: false,
    showError: true,
    activeGeoData: { latitude: 0, longitude: 0 }
  };

  it('debería retornar el estado inicial', () => {
    expect(quakeMapReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('debería manejar setInputValue basado en el index', () => {
    const state = quakeMapReducer(initialState, setInputValue({ index: 2, value: '2026-03-01' }));
    expect(state.inputValues[2]).toBe('2026-03-01');
    expect(state.inputValues[0]).toBe(''); // others remain unchanged
  });

  it('debería manejar clearInputValue', () => {
    const startState = {
      ...initialState,
      inputValues: ['lat', 'lon', 'date', '', '', '', '', '', '']
    };
    const state = quakeMapReducer(startState, clearInputValue(1));
    expect(state.inputValues[1]).toBe('');
    expect(state.inputValues[0]).toBe('lat'); // unchanged
  });

  it('debería manejar setSelectedOption', () => {
    const state = quakeMapReducer(initialState, setSelectedOption('miles'));
    expect(state.selectedOption).toBe('miles');
  });
});
