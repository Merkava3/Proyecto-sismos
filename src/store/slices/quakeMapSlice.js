import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GeoApi from '../../services/GeoApi/GeoApi';
import GeoData from '../../data/Requeriments';

export const fetchEarthquakesByDate = createAsyncThunk(
    'quakeMap/fetchEarthquakesByDate',
    async (_, { rejectWithValue }) => {
        try {
            const geoApi = new GeoApi(GeoData, 'EarthquakesByDate');
            const result = await geoApi.getDataWithCaching();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    inputValues: ['', '', 1, 100, 1, 1000, 3, '', ''],
    selectedOption: 'miles',
    place: {},
    loading: false,
    showError: true,
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
            const mapping = [
                'latitude', 'longitude', 'start', 'count', 'intensity', 'radius', 'magnitude', 'startDate', 'endDate'
            ];
            mapping.forEach((property, index) => {
                GeoData[property] = state.inputValues[index];
            });
            GeoData.units = state.selectedOption;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquakesByDate.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEarthquakesByDate.fulfilled, (state, action) => {
                state.loading = false;
                state.place = action.payload.result || {};
                state.showError = action.payload.show !== undefined ? action.payload.show : true;
            })
            .addCase(fetchEarthquakesByDate.rejected, (state) => {
                state.loading = false;
                state.showError = false;
            });
    }
});

export const { setInputValue, clearInputValue, setSelectedOption, updateGeoDataRequirements } = quakeMapSlice.actions;

export default quakeMapSlice.reducer;
