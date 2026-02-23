import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style/QuakeMapMyLocation.css';
import { HandleDecimalNumber } from '../../utils/validation';
import {
  fetchEarthquakesByDate, setInputValue, clearInputValue, setSelectedOption, updateGeoDataRequirements
} from '../../store/slices/quakeMapSlice';
import GeoData from '../../data/Requeriments';
import Error429 from '../Error429/Error429';
import MapEarth from '../MapEarth/MapEarth';
import 'animate.css';

const AnimationWrapper = ({ children, show }) => {
  const animationClass = show ? 'animate__fadeIn' : 'animate__fadeOut';
  return <div className={`WrapperData animate__animated ${animationClass}`}>{children}</div>;
};

const QuakeMapMyLocation = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(true);

  const { inputValues, selectedOption, place, loading, showError } = useSelector((state) => state.quakeMap);

  useEffect(() => {
    let timeoutId;
    if (!showError) {
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 5 * 60 * 1000);
    } else {
      dispatch(fetchEarthquakesByDate());
    }
    return () => clearTimeout(timeoutId);
  }, [showError, dispatch]);

  const HandleButton = (e) => {
    e.preventDefault();
    const isEmptyOrZero = inputValues.some((value) => value === '' || value === 0);
    if (isEmptyOrZero) {
      alert('Debe ingresar todos los datos');
    } else {
      dispatch(updateGeoDataRequirements());
      dispatch(fetchEarthquakesByDate());
      setShowForm(false);
    }
  };

  const inputs = [
    { label: 'latitud', type: 'text', readOnly: false },
    { label: 'longitud', type: 'text', readOnly: false },
    { label: 'inicio', type: 'number', min: 1, max: 100, readOnly: false },
    { label: 'contar', type: 'number', min: 1, max: 100, readOnly: false },
    { label: 'intensidad', type: 'number', min: 1, max: 100, readOnly: false },
    { label: 'radio', type: 'number', min: 1, max: 1000, readOnly: false },
    { label: 'magnitude', type: 'number', min: 1, max: 10, readOnly: false },
    { label: "Fecha inicio", type: 'date' },
    { label: "Fecha fin", type: 'date' }
  ];

  const generateInputs = (inputsToRender) => {
    return inputsToRender.map((input, index) => {
      const value = inputValues[index];
      const handleInputChange = (event) => {
        let newValue = event.target.value;
        if (event.target.type === 'number') {
          const minValue = Number(event.target.min);
          const maxValue = Number(event.target.max);
          newValue = Number(newValue);
          if (isNaN(newValue) || newValue < minValue) {
            newValue = minValue;
          } else if (newValue > maxValue) {
            newValue = maxValue;
          }
        }
        dispatch(setInputValue({ index, value: newValue }));
      };

      return (
        <div key={index} className="ContainerInputs">
          <label className="labelAcord">
            {input.label}:
            <input
              className="inputAcordions"
              type={input.type}
              value={value}
              min={input.type === 'number' ? input.min : undefined}
              max={input.type === 'number' ? input.max : undefined}
              readOnly={input.readOnly}
              onChange={handleInputChange}
              onClick={() => dispatch(clearInputValue(index))}
              onKeyPress={(e) => { if (input.type === 'text') HandleDecimalNumber(e, e.target.value); }}
            />
          </label>
        </div>
      );
    });
  };

  return (
    <>
      {!showError ? (
        <Error429 />
      ) : (
        <>
          <div className="ShowFormButtonContainer">
            <button className="ButtonAccordions" onClick={(e) => { e.preventDefault(); setShowForm(!showForm); }}>
              {!showForm ? (
                <FontAwesomeIcon icon={faCircleChevronDown} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faCircleChevronUp} size="2x" />
              )}
            </button>
          </div>
          <AnimationWrapper show={showForm}>
            <form onSubmit={(e) => e.preventDefault()}>
              {generateInputs(inputs.slice(0, 9))}
              <div className="UnitsData">
                <label htmlFor="options-select">unidades:</label>
                <select
                  className="SelectUnid"
                  id="options-select"
                  value={selectedOption}
                  onChange={(e) => dispatch(setSelectedOption(e.target.value))}>
                  <option value="miles">Millas</option>
                  <option value="kilometers">Kilómetros</option>
                </select>
                <button className="ButtonSend" type="submit" onClick={HandleButton}>
                  Calcular
                </button>
              </div>
            </form>
          </AnimationWrapper>
          <MapEarth geodata={GeoData} place={place} loading={loading} />
        </>
      )}
    </>
  );
};

export default QuakeMapMyLocation;
