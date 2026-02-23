import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GeoApi from '../../services/GeoApi/GeoApi';
import GeoData from '../../data/Requeriments';
import Countries, { Coords } from '../../data/countries';

export const fetchEarthquakes = createAsyncThunk(
    'worldMap/fetchEarthquakes',
    async (type, { getState, rejectWithValue }) => {
        try {
            const geoApi = new GeoApi(GeoData, type);
            const result = await geoApi.getDataWithCaching();
            return result; // result contiene { show, result }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    country: Countries[0]["País"],
    showError: true,
    place: {},
    loading: false,
    isMagnitudeSelectOpen: false,
    buttonActive: false,
    Magnitude: 3,
    Counter: 5,
    Type: "Earthquakes",
    ShowUnits: false,
    Radius: "",
    Km: false,
    Miles: false,
    Units: "kilometers",
    opcionesPaises: Countries,
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
        setKm: (state, action) => { state.Km = action.payload; },
        setMiles: (state, action) => { state.Miles = action.payload; },
        toggleMagnitudeSelect: (state) => { state.isMagnitudeSelectOpen = !state.isMagnitudeSelectOpen; },
        toggleButtonActive: (state) => { state.buttonActive = !state.buttonActive; },
        toggleShowUnits: (state) => { state.ShowUnits = !state.ShowUnits; },
        incrementCounter: (state) => { if (state.Counter < 100) state.Counter += 1; },
        decrementCounter: (state) => { if (state.Counter > 0) state.Counter -= 1; },
        updateGeoData: (state) => {
            // Setea los requerimientos fijos de la API antes de despachar
            const [lat, lon] = Coords(state.country);
            GeoData.latitude = lat;
            GeoData.longitude = lon;
            GeoData.count = state.Counter;
            GeoData.magnitude = state.Magnitude;
            GeoData.radius = state.Radius === "" || state.Radius === 0 ? 500 : state.Radius;
            GeoData.units = state.Units;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquakes.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEarthquakes.fulfilled, (state, action) => {
                state.loading = false;
                state.place = action.payload.result || {};
                state.showError = action.payload.show !== undefined ? action.payload.show : true;
            })
            .addCase(fetchEarthquakes.rejected, (state) => {
                state.loading = false;
                state.showError = false; // Manejamos el Error 429
            });
    }
});

export const {
    setCountry, setType, setMagnitude, setCounter, setRadius, setUnits, setKm, setMiles,
    toggleMagnitudeSelect, toggleButtonActive, toggleShowUnits,
    incrementCounter, decrementCounter, updateGeoData
} = worldMapSlice.actions;

export default worldMapSlice.reducer;
