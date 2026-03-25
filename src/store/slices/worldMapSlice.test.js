import worldMapReducer, { 
  setCountry, 
  setMagnitude, 
  incrementCounter, 
  decrementCounter,
  setUnits
} from './worldMapSlice';

describe('World Map Redux Slice', () => {
  const initialState = {
    country: "Colombia",
    showError: true,
    place: [],
    loading: false,
    isMagnitudeSelectOpen: false,
    buttonActive: false,
    Magnitude: 4,
    Counter: 50,
    Type: "Earthquakes",
    ShowUnits: false,
    Radius: "500",
    Km: true,
    Miles: false,
    Units: "kilometers",
    opcionesPaises: expect.any(Object),
    activeGeoData: { latitude: 4.5709, longitude: -74.2973 },
  };

  it('debería retornar el estado inicial', () => {
    const defaultState = worldMapReducer(undefined, { type: undefined });
    expect(defaultState.country).toBe("Colombia");
    expect(defaultState.Counter).toBe(50);
  });

  it('debería manejar la actualización del país', () => {
    expect(worldMapReducer(undefined, setCountry('Chile')).country).toBe('Chile');
  });

  it('debería manejar incrementCounter sin pasar de 100', () => {
    const startState = { ...initialState, Counter: 99 };
    let state = worldMapReducer(startState, incrementCounter());
    expect(state.Counter).toBe(100);
    
    // Limits at 100
    state = worldMapReducer(state, incrementCounter());
    expect(state.Counter).toBe(100);
  });

  it('debería manejar decrementCounter sin bajar de 1', () => {
    const startState = { ...initialState, Counter: 2 };
    let state = worldMapReducer(startState, decrementCounter());
    expect(state.Counter).toBe(1);
    
    // Limits at 1
    state = worldMapReducer(state, decrementCounter());
    expect(state.Counter).toBe(1);
  });

  it('debería manejar setUnits (kilometers / miles)', () => {
    const state = worldMapReducer(undefined, setUnits('miles'));
    expect(state.Units).toBe('miles');
  });
});
