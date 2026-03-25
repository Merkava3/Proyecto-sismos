import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GeoApi from '../../services/GeoApi/GeoApi';

/**
 * Thunk to fetch earthquakes by date.
 */
export const fetchEarthquakesByDate = createAsyncThunk(
    'quakeMap/fetchEarthquakesByDate',
    async (_, { getState, rejectWithValue }) => {
        try {
            const state = getState().quakeMap;
            const { inputValues, selectedOption } = state;
            
            const requirements = {
                latitude: inputValues[0],
                longitude: inputValues[1],
                start: inputValues[2],
                count: inputValues[3],
                intensity: inputValues[4],
                radius: inputValues[5],
                magnitude: inputValues[6],
                startDate: inputValues[7],
                endDate: inputValues[8],
                units: selectedOption
            };

            const geoApi = new GeoApi(requirements, 'EarthquakesByDate');
            const result = await geoApi.getDataWithCaching();
            
            return {
                ...result,
                newGeoData: {
                    latitude: parseFloat(inputValues[0] || 0),
                    longitude: parseFloat(inputValues[1] || 0)
                }
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    inputValues: ['', '', '', '', '', '', '', '', ''],
    selectedOption: 'kilometers',
    place: [],
    loading: false,
    showError: true,
    activeGeoData: { latitude: 0, longitude: 0 }
};

export const quakeMapSlice = createSlice({
    name: 'quakeMap',
    initialState,
    reducers: {
        setInputValue: (state, action) => {
            const { index, value } = action.payload;
            state.inputValues[index] = value;
        },
        clearInputValue: (state, action) => {
            state.inputValues[action.payload] = '';
        },
        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload;
        },
        updateGeoDataRequirements: (state) => {
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquakesByDate.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEarthquakesByDate.fulfilled, (state, action) => {
                state.loading = false;
                state.place = action.payload.result || [];
                state.showError = action.payload.show !== undefined ? action.payload.show : true;
                if (action.payload.newGeoData) {
                    state.activeGeoData = action.payload.newGeoData;
                }
            })
            .addCase(fetchEarthquakesByDate.rejected, (state) => {
                state.loading = false;
                state.showError = false;
            });
    }
});

export const { setInputValue, clearInputValue, setSelectedOption, updateGeoDataRequirements } = quakeMapSlice.actions;

export default quakeMapSlice.reducer;
