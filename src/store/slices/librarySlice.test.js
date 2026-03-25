import libraryReducer, { setCity, setPage, resetLibraryData } from './librarySlice';

describe('Library Redux Slice', () => {
  const initialState = {
    city: '',
    place: [],
    loading: false,
    showError: true,
    page: 1,
    itemsPerPage: 8,
  };

  it('debería retornar el estado inicial', () => {
    expect(libraryReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('debería manejar setCity', () => {
    const previousState = { ...initialState, page: 3 };
    const state = libraryReducer(previousState, setCity('Medellin'));
    
    expect(state.city).toEqual('Medellin');
    expect(state.page).toEqual(1); // Page should reset to 1 when city changes
  });

  it('debería manejar setPage', () => {
    const state = libraryReducer(initialState, setPage(5));
    expect(state.page).toEqual(5);
  });

  it('debería manejar resetLibraryData', () => {
    const previousState = { 
      ...initialState, 
      place: [{ id: 1 }, { id: 2 }],
      page: 10
    };
    const state = libraryReducer(previousState, resetLibraryData());

    expect(state.place).toEqual([]);
    expect(state.page).toEqual(1);
  });
});
