import { createSlice } from '@reduxjs/toolkit';
import TableScale from '../../utils/TableScale';
import Sismos from '../../utils/Sismos';

const initialState = {
    amplitud: '',
    diferencia: '',
    movimiento: null,
    scaleInfo: null,
};

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setAmplitud: (state, action) => {
            state.amplitud = action.payload;
        },
        setDiferencia: (state, action) => {
            state.diferencia = action.payload;
        },
        calculateSis: (state) => {
            // Principio SRP (Single Responsibility Principle): El reducer solo muta estado usando lógica de dominio
            const newMovimiento = new Sismos(state.amplitud, state.diferencia);
            state.movimiento = { ...newMovimiento }; // Solo guardamos data serializable si fuera necesario, para que Redux Toolkit funcione bien
            const scaleInfo = TableScale(newMovimiento.force());
            state.scaleInfo = scaleInfo;
            state.amplitud = '';
            state.diferencia = '';
        },
        resetCalculator: () => initialState,
    },
});

export const { setAmplitud, setDiferencia, calculateSis, resetCalculator } = calculatorSlice.actions;

export default calculatorSlice.reducer;
