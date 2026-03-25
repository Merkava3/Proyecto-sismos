import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faHouseCrack, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Error429 from '../Error429/Error429';
import MapEarth from '../MapEarth/MapEarth';
import {
  fetchEarthquakes, setCountry, setType, setMagnitude, setRadius, setUnits, setKm, setMiles,
  toggleMagnitudeSelect, toggleButtonActive, toggleShowUnits,
  incrementCounter, decrementCounter
} from '../../store/slices/worldMapSlice';
import { handleOnchangeNum } from '../../utils/validation';
import './style/WorldMapWithControls.css';
import 'animate.css';

/**
 * WorldMapWithControls component to display a global earthquake map with interactive filters.
 * Optimized to perform controlled re-renders and fly-to only when "Calculate" is clicked.
 */
const WorldMapWithControls = () => {
  const dispatch = useDispatch();
  const {
    showError, place, loading, isMagnitudeSelectOpen, buttonActive,
    Counter, Radius, Km, Miles, ShowUnits, opcionesPaises, Type, country, activeGeoData, Magnitude
  } = useSelector((state) => state.worldMap);

  // Initial load only if we don't have data
  useEffect(() => {
    if (showError && (!place || place.length === 0)) {
        dispatch(fetchEarthquakes(Type));
    }
  }, [dispatch, showError, Type, place]);

  const handleCalculate = (e) => {
    e.preventDefault();
    dispatch(fetchEarthquakes(Type));
  };

  const handleRecentCheckbox = (e) => {
    dispatch(setType(e.target.checked ? "RecentEarthquakes" : "Earthquakes"));
  };

  const setKmUnits = () => {
    dispatch(setKm(true));
    dispatch(setUnits("kilometers"));
  };

  const setMilesUnits = () => {
    dispatch(setMiles(true));
    dispatch(setUnits("miles"));
  };

  const magnitudeOptions = Array.from({ length: 9 }, (_, index) => (
    <option key={index + 1} value={index + 1}>{index + 1}+ Mw</option>
  ));

  const countryItems = opcionesPaises.map((pais) => (
    <option key={pais["País"]} value={pais["País"]}>
      {pais["País"]}
    </option>
  ));

  return (
    <div className="WorldMapPage">
      {!showError ? (
        <Error429 />
      ) : (
        <>
          <div className='WrapperCoords'>
            <div className='WrapperSelect'>
              <label htmlFor="paisesSelect" className='LabelCoords'>Elige un país:</label>
              <select 
                className='SelectCoords' 
                name="paises" 
                id="paisesSelect" 
                value={country} 
                onChange={(e) => dispatch(setCountry(e.target.value))}
              >
                {countryItems}
              </select>
              <button 
                className='ButtonCalculer' 
                onClick={handleCalculate} 
                aria-label="Calcular" 
                title="Calcular"
                disabled={loading}
              >
                <FontAwesomeIcon icon={faLocationArrow} size="2x" color="white" />
              </button>
              <div className="Recients">
                <label htmlFor="recentCheck">Recientes:</label>
                <input id="recentCheck" type="checkbox" name="Recient" value="Reciente" onClick={handleRecentCheckbox} />
              </div>
            </div>

            <div className='WrapperOptions'>
              <div className="OptionMagnitud">
                <button className='ButtonOptions' onClick={() => dispatch(toggleMagnitudeSelect())}>
                  <FontAwesomeIcon icon={faHouseCrack} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> {Magnitude}+ Mw </p>
                </button>
                {isMagnitudeSelectOpen && (
                  <select 
                    className="SelectMagnitude animate__animated animate__bounceIn" 
                    name="magnitude" 
                    id="magnitude" 
                    value={Magnitude}
                    onChange={(e) => dispatch(setMagnitude(e.target.value))}
                  >
                    {magnitudeOptions}
                  </select>
                )}
              </div>
              <div className="OptionCount">
                <button className='ButtonOptions' onClick={() => dispatch(toggleButtonActive())}>
                  <FontAwesomeIcon icon={faLocationDot} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> <span>{Counter}</span> Sismos </p>
                </button>
                {buttonActive && (
                  <div className="SelectCount animate__animated animate__bounceIn">
                    <div className='ContainerCount'>
                      <button className='CountDercrementar' onClick={(e) => { e.preventDefault(); dispatch(decrementCounter()); }}>-</button>
                      <span>{Counter}</span>
                      <button className='CountIncrementar' onClick={(e) => { e.preventDefault(); dispatch(incrementCounter()); }}>+</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="OptionUnits">
                <button className="ButtonOptions" onClick={() => dispatch(toggleShowUnits())}>
                  <FontAwesomeIcon icon={faGlobe} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> {Radius} {Km ? "Km" : "Mi"} </p>
                </button>
                {ShowUnits && (
                  <div className="ContainerUnits animate__animated animate__bounceIn">
                    <input type="text"
                      name="Units"
                      value={Radius}
                      className="inputUnits"
                      onChange={(e) => dispatch(setRadius(e.target.value))}
                      onKeyPress={(e) => handleOnchangeNum(e, Radius)}
                      placeholder="Radio" />
                    <div className='OpUntisChecbox'>
                      <div className="InputUnitsKm">
                        <label htmlFor="KM"> Km </label>
                        <input id="KM" type="checkbox" checked={Km} name="Km" value="Km" onChange={setKmUnits} />
                      </div>
                      <div className="InputUnitsMiles">
                        <label htmlFor="Miles"> Mi </label>
                        <input id="Miles" type="checkbox" checked={Miles} name="Miles" value="Miles" onChange={setMilesUnits} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <main className="MapViewport">
            {/* Decoupled Map center: only flyTo when activeGeoData changes from Redux fulfilled */}
            <MapEarth geodata={activeGeoData} place={place} loading={loading} />
          </main>
        </>
      )}
    </div>
  );
};

export default WorldMapWithControls;