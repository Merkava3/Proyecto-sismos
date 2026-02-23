import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import GeoApi from '../../services/GeoApi/GeoApi';
import GeoData from '../../data/Requeriments';

export const fetchEarthquakesLibrary = createAsyncThunk(
    'library/fetchEarthquakesLibrary',
    async (type, { rejectWithValue }) => {
        try {
            const geoApi = new GeoApi(GeoData, type);
            await geoApi.clearCacheIfNeeded();
            const result = await geoApi.getDataWithCaching();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    city: '',
    place: [],
    loading: false,
    showError: true,
    page: 1,
    itemsPerPage: 8,
};

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
            state.page = 1; // reset page on search
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        resetLibraryData: (state) => {
            state.place = [];
            state.page = 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEarthquakesLibrary.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEarthquakesLibrary.fulfilled, (state, action) => {
                state.loading = false;
                state.place = action.payload.result || [];
                state.showError = action.payload.show !== undefined ? action.payload.show : true;
            })
            .addCase(fetchEarthquakesLibrary.rejected, (state) => {
                state.loading = false;
                state.showError = false;
            });
    }
});

export const { setCity, setPage, resetLibraryData } = librarySlice.actions;

export default librarySlice.reducer;
