import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style/QuakeMapMyLocation.css';
import { HandleDecimalNumber } from '../../utils/validation';
import {
  fetchEarthquakesByDate, setInputValue, setSelectedOption
} from '../../store/slices/quakeMapSlice';
import Error429 from '../Error429/Error429';
import MapEarth from '../MapEarth/MapEarth';
import 'animate.css';

/**
 * QuakeMapMyLocation component to search for earthquakes in specific locations and dates.
 */
const QuakeMapMyLocation = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(true);

  const { inputValues, selectedOption, place, loading, showError, activeGeoData } = useSelector((state) => state.quakeMap);

  const handleCalculate = (e) => {
    e.preventDefault();
    const hasRequiredValues = inputValues[0] !== '' && inputValues[1] !== '';
    if (!hasRequiredValues) {
      alert('Por favor, ingresa latitud y longitud al menos.');
    } else {
      dispatch(fetchEarthquakesByDate());
      setShowForm(false);
    }
  };

  const inputs = [
    { label: 'Latitud', type: 'text', placeholder: 'Ej: 4.5708' },
    { label: 'Longitud', type: 'text', placeholder: 'Ej: -74.297' },
    { label: 'Inicio (Pág)', type: 'number', min: 1, max: 100, placeholder: '1' },
    { label: 'Contar', type: 'number', min: 1, max: 500, placeholder: '100' },
    { label: 'Intensidad', type: 'number', min: 1, max: 100, placeholder: '1' },
    { label: 'Radio', type: 'number', min: 1, max: 20000, placeholder: '1000' },
    { label: 'Magnitud Mín', type: 'number', min: 1, max: 10, placeholder: '3' },
    { label: "Fecha Inicio", type: 'date' },
    { label: "Fecha Fin", type: 'date' }
  ];

  const handleInputChange = (index, type) => (event) => {
    let newValue = event.target.value;
    dispatch(setInputValue({ index, value: newValue }));
  };

  return (
    <div className="MapSearchPage">
      {!showError ? (
        <Error429 />
      ) : (
        <>
          <div className="ShowFormButtonContainer">
            <button 
              className="ButtonAccordions" 
              onClick={() => setShowForm(!showForm)}
              aria-label={showForm ? "Cerrar filtros" : "Abrir filtros"}
              title="Filtros de búsqueda"
            >
              <FontAwesomeIcon icon={showForm ? faCircleChevronUp : faCircleChevronDown} size="2x" />
            </button>
          </div>

          <aside className={`SearchAside ${showForm ? 'visible' : 'hidden'}`}>
            <h2 className="AsideTitle">Filtros Sísmicos</h2>
            <form onSubmit={handleCalculate} className="FiltersForm">
              {inputs.map((input, index) => (
                <div key={index} className="FilterGroup">
                  <label className="FilterLabel">
                    {input.label}
                  </label>
                  <input
                    className="FilterInput"
                    type={input.type}
                    value={inputValues[index]}
                    placeholder={input.placeholder}
                    min={input.min || ""}
                    max={input.max || ""}
                    onChange={handleInputChange(index, input.type)}
                    onKeyPress={(e) => { 
                      if (input.type === 'text') HandleDecimalNumber(e, e.target.value); 
                    }}
                    required={index < 2} // Lat/Lon are required
                  />
                </div>
              ))}

              <div className="FilterGroup">
                <label className="FilterLabel">Unidades</label>
                <select
                  className="FilterSelect"
                  value={selectedOption}
                  onChange={(e) => dispatch(setSelectedOption(e.target.value))}
                >
                  <option value="miles">Millas</option>
                  <option value="kilometers">Kilómetros</option>
                </select>
              </div>

              <button className="ButtonSend" type="submit" disabled={loading}>
                {loading ? "Calculando..." : "Calcular Mapa"}
              </button>
            </form>
          </aside>

          <main className="MapViewport">
            {/* Using activeGeoData from state: map only flyTo when fetch completes */}
            <MapEarth geodata={activeGeoData} place={place} loading={loading} />
          </main>
        </>
      )}
    </div>
  );
};

export default QuakeMapMyLocation;
