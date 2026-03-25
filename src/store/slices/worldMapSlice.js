import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GeoApi from '../../services/GeoApi/GeoApi';
import Countries, { Coords } from '../../data/countries';

/**
 * Thunk to fetch earthquakes.
 * Generates requirements dynamically from the state to avoid mutating global objects.
 */
export const fetchEarthquakes = createAsyncThunk(
    'worldMap/fetchEarthquakes',
    async (type, { getState, rejectWithValue }) => {
        try {
            const state = getState().worldMap;
            const [lat, lon] = Coords(state.country) || [4.5709, -74.2973];
            
            // Build the requirements object dynamically
            const requirements = {
                latitude: lat,
                longitude: lon,
                count: state.Counter,
                magnitude: state.Magnitude,
                radius: (state.Radius === "" || Number(state.Radius) <= 0) ? 500 : state.Radius,
                units: state.Units
            };

            const geoApi = new GeoApi(requirements, type);
            const result = await geoApi.getDataWithCaching();
            
            return { 
                ...result, 
                newGeoData: { latitude: parseFloat(lat), longitude: parseFloat(lon) } 
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

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
    opcionesPaises: Countries,
    // activeGeoData stores the coordinates currently rendered on the map
    activeGeoData: { latitude: 4.5709, longitude: -74.2973 }, // Colombia por defecto
};

export const worldMapSlice = createSlice({
    name: 'worldMap',
    initialState,
    reducers: {
        setCountry: (state, action) => { state.country = action.payload; },
        setType: (state, action) => { state.Type = action.payload; },
        setMagnitude: (state, action) => { state.Magnitude = action.payload; },
        setCounter: (state, action) => { state.Counter = action.payload; },
        setRadius: (state, action) => { state.Radius = action.payload; },
        setUnits: (state, action) => { state.Units = action.payload; },
        setKm: (state, action) => { state.Km = action.payload; if (action.payload) state.Miles = false; },
        setMiles: (state, action) => { state.Miles = action.payload; if (action.payload) state.Km = false; },
        toggleMagnitudeSelect: (state) => { state.isMagnitudeSelectOpen = !state.isMagnitudeSelectOpen; },
        toggleButtonActive: (state) => { state.buttonActive = !state.buttonActive; },
        toggleShowUnits: (state) => { state.ShowUnits = !state.ShowUnits; },
        incrementCounter: (state) => { if (state.Counter < 100) state.Counter += 1; },
        decrementCounter: (state) => { if (state.Counter > 1) state.Counter -= 1; },
        updateGeoData: (state) => { return state; }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquakes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEarthquakes.fulfilled, (state, action) => {
                state.loading = false;
                state.place = action.payload.result || [];
                state.showError = action.payload.show !== undefined ? action.payload.show : true;
                // Only update map center when data is successfully fetched
                if (action.payload.newGeoData) {
                    state.activeGeoData = action.payload.newGeoData;
                }
            })
            .addCase(fetchEarthquakes.rejected, (state, { payload }) => {
                state.loading = false;
                state.showError = false;
                console.error("Fetch failed:", payload);
            });
    }
});

export const {
    setCountry, setType, setMagnitude, setCounter, setRadius, setUnits, setKm, setMiles,
    toggleMagnitudeSelect, toggleButtonActive, toggleShowUnits,
    incrementCounter, decrementCounter, updateGeoData
} = worldMapSlice.actions;

export default worldMapSlice.reducer;
