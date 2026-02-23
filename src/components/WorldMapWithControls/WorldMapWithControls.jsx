import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faHouseCrack, faLocationDot, faGlobe } from '@fortawesome/free-solid-svg-icons';
import Error429 from '../Error429/Error429';
import MapEarth from '../MapEarth/MapEarth';
import {
  fetchEarthquakes, setCountry, setType, setMagnitude, setRadius, setUnits, setKm, setMiles,
  toggleMagnitudeSelect, toggleButtonActive, toggleShowUnits,
  incrementCounter, decrementCounter, updateGeoData
} from '../../store/slices/worldMapSlice';
import GeoData from '../../data/Requeriments';
import { handleOnchangeNum } from '../../utils/validation';
import './style/WorldMapWithControls.css';
import 'animate.css';

const WorldMapWithControls = () => {
  const dispatch = useDispatch();
  const {
    showError, place, loading, isMagnitudeSelectOpen, buttonActive,
    Counter, Radius, Km, Miles, ShowUnits, opcionesPaises, Type
  } = useSelector((state) => state.worldMap);

  useEffect(() => {
    let timeoutId;
    if (!showError) {
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 5 * 60 * 1000);
    } else {
      dispatch(fetchEarthquakes(Type));
    }
    return () => clearTimeout(timeoutId);
  }, [showError, Type, dispatch]);

  const HandleButton = (e) => {
    e.preventDefault();
    dispatch(updateGeoData());
    dispatch(fetchEarthquakes(Type));
  };

  const HandleCheckBox = (e) => {
    if (e.target.checked) {
      dispatch(setType("RecentEarthquakes"));
    } else {
      dispatch(setType("Earthquakes"));
    }
  };

  const HandleKM = () => {
    dispatch(setKm(true));
    dispatch(setMiles(false));
    dispatch(setUnits("kilometers"));
  };

  const HandleMiles = () => {
    dispatch(setKm(false));
    dispatch(setMiles(true));
    dispatch(setUnits("miles"));
  };

  const MagnitudScale = Array.from({ length: 9 }, (_, index) => (
    <option key={index + 1} value={index + 1}>{index + 1}</option>
  ));

  const countryOptions = opcionesPaises.map((pais) => (
    <option key={pais["País"]} value={pais["País"]}>
      {pais["País"]}
    </option>
  ));

  return (
    <div>
      {!showError ? (
        <Error429 />
      ) : (
        <>
          <div className='WrapperCoords'>
            <div className='WrapperSelect'>
              <label htmlFor="paisesSelect" className='LabelCoords'>Elige un país:</label>
              <select className='SelectCoords' name="paises" id="paisesSelect" onChange={(e) => dispatch(setCountry(e.target.value))}>
                {countryOptions}
              </select>
              <button className='ButtonCalculer' onClick={HandleButton}>
                <FontAwesomeIcon icon={faLocationArrow} size="2x" color="white" />
              </button>
              <div className="Recients">
                <label htmlFor="vehicle1">Recientes : </label>
                <input type="checkbox" name="Recient" value="Reciente" onClick={HandleCheckBox} />
              </div>
            </div>

            <div className='WrapperOptions'>
              <div className="OptionMagnitud">
                <button className='ButtonOptions' onClick={() => dispatch(toggleMagnitudeSelect())}>
                  <FontAwesomeIcon icon={faHouseCrack} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> Magitud </p>
                </button>
                {isMagnitudeSelectOpen && (
                  <select className="SelectMagnitude animate__animated animate__bounceIn" name="magnitude" id="magnitude" onChange={(e) => dispatch(setMagnitude(e.target.value))}>
                    {MagnitudScale}
                  </select>
                )}
              </div>
              <div className="OptionCount">
                <button className='ButtonOptions' onClick={() => dispatch(toggleButtonActive())}>
                  <FontAwesomeIcon icon={faLocationDot} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> Numero Sismos </p>
                </button>
                {buttonActive && (
                  <div className="SelectCount animate__animated animate__bounceIn">
                    <div className='ContainerCount'>
                      <button className='CountIncrementar' onClick={(e) => { e.preventDefault(); dispatch(incrementCounter()); }}>+</button>
                      <span>{Counter}</span>
                      <button className='CountDercrementar' onClick={(e) => { e.preventDefault(); dispatch(decrementCounter()); }}>-</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="OptionUnits">
                <button className="ButtonOptions" onClick={() => dispatch(toggleShowUnits())}>
                  <FontAwesomeIcon icon={faGlobe} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> Radio </p>
                </button>
                {ShowUnits && (
                  <div className="ContainerUnits animate__animated animate__bounceIn">
                    <input type="text"
                      name="Units"
                      value={Radius}
                      className="inputUnits"
                      onChange={(e) => dispatch(setRadius(e.target.value))}
                      onKeyPress={(e) => handleOnchangeNum(e, Radius)}
                      placeholder="Ingrese el radio" />
                    <div className='OpUntisChecbox'>
                      <div className="InputUnitsKm">
                        <label htmlFor="KM"> Km: </label>
                        <input type="checkbox" checked={Km} name="Km" value="Km" onChange={HandleKM} />
                      </div>
                      <label htmlFor="Miles"> Miles: </label>
                      <input type="checkbox" checked={Miles} name="Miles" value="Miles" onChange={HandleMiles} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <MapEarth geodata={GeoData} place={place} loading={loading} />
        </>
      )}
    </div>
  );
};

export default WorldMapWithControls;