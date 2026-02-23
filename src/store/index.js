import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './slices/calculatorSlice';
import worldMapReducer from './slices/worldMapSlice';
import quakeMapReducer from './slices/quakeMapSlice';
import libraryReducer from './slices/librarySlice';

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
        worldMap: worldMapReducer,
        quakeMap: quakeMapReducer,
        library: libraryReducer,
    },
});
