import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAmplitud, setDiferencia, calculateSis } from '../../store/slices/calculatorSlice';
import Modal from '../Modal/Modal';
import handleKeyPress from '../../utils/validation';
import './style/RichterCalculator.css';

const RichterCalculator = () => {
  const dispatch = useDispatch();
  const { amplitud, diferencia, movimiento, scaleInfo } = useSelector((state) => state.calculator);

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculateSis());
  };

  const isEmpty = !amplitud.toString().trim() || !diferencia.toString().trim();

  return (
    <>
      <h1 className="Title">Escala de Ritcher</h1>
      <div className="Box">
        <form className="FormContainer" onSubmit={HandleSubmit}>
          {/* Amplitud */}
          <label className="LabelName" htmlFor="amplitud"> Amplitud: </label>
          <input
            className="InputText"
            type="text"
            name="amplitud"
            value={amplitud}
            onChange={(e) => dispatch(setAmplitud(e.target.value))}
            placeholder="Ingrese amplitud"
            onKeyPress={(e) => handleKeyPress(e, amplitud)}
            required
          />

          {/* Diferencia */}
          <label className="LabelName" htmlFor="diferencia"> Diferencia: </label>
          <input
            className="InputText"
            type="text"
            name="diferencia"
            value={diferencia}
            onChange={(e) => dispatch(setDiferencia(e.target.value))}
            placeholder="Ingrese diferencia"
            onKeyPress={(e) => handleKeyPress(e, diferencia)}
            required
          />

          {/* Ventana modal es un boton */}
          <Modal
            movimiento={movimiento}
            showModal={!isEmpty}
            scaleInfo={scaleInfo}
          />
        </form>
      </div>
    </>
  );
}

export default RichterCalculator;

