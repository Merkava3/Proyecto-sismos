import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import './style/QuakeMapMyLocation.css';
import { HandleDecimalNumber } from '../../utils/validation';
import GeoData from '../../data/Requeriments';
import GeoApi from '../../services/GeoApi/GeoApi';
import Error429 from '../Error429/Error429';
import MapEarth from '../MapEarth/MapEarth';
import 'animate.css';

const AnimationWrapper = ({ children, show }) => {
  const animationClass = show ? 'animate__fadeIn' : 'animate__fadeOut';
  return <div className={`WrapperData animate__animated ${animationClass}`}>{children}</div>;
};

const QuakeMapMyLocation = () => {
  const [showForm, setShowForm] = useState(true);
  const [isFormClosed, setIsFormClosed] = useState(false);
  const [selectedOption, setSelectedOption] = useState('miles');
  const [ShowError, setShowError] = useState(true);
  const [loading, setLoading] = useState(false);  
  const [place, setPlace] = useState({});
  const [DateStart , setDateStart] = useState(null);
  const [DateEnd , setDateEnd] = useState(null);
  const [inputValues, setInputValues] = useState([
    '', '', 1, 100, 1, 1000, 3, '', ''
  ]);

  useEffect(() => {
    let timeoutId;
    if (!ShowError) {
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 5 * 60 * 1000);
    } else {
      ApiExecute();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ShowError]);

  const ApiExecute = async () => {
    setLoading(true);
    const geoApi = new GeoApi(GeoData, 'EarthquakesByDate');
    const result = await geoApi.getDataWithCaching();
    setPlace(result.result);
    setShowError(result.show);
    setLoading(false);
  };

  const handleInputClick = (index) => {
    const newValues = [...inputValues];
    newValues[index] = '';
    setInputValues(newValues);
  };

  
  const HandleFormsInput = (e) => {
    e.preventDefault();
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const propertyMapping = [
  { property: 'latitude', index: 0 },
  { property: 'longitude', index: 1 },
  { property: 'start', index: 2 },
  { property: 'count', index: 3 },
  { property: 'intensity', index: 4 },
  { property: 'radius', index: 5 },
  { property: 'magnitude', index: 6 },
];

const dateMapping = [
  { property: 'startDate', index: 7 },
  { property: 'endDate', index: 8 },
];


  const HandleButton = (e) => {
    e.preventDefault();
    const isEmptyOrZero = inputValues.some((value) => value === '' || value === 0);
    if (isEmptyOrZero) {
      alert('Debe ingresar todos los datos');
    } else {
       propertyMapping.forEach(({ property, index }) => {
      GeoData[property] = inputValues[index];
    });

    dateMapping.forEach(({ property, index }) => {
      GeoData[property] = inputValues[index];
    });

    GeoData.units = selectedOption;
    ApiExecute();
    setIsFormClosed(true);
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
    { label: "Fecha inicio", type: 'date', value: DateStart },
    { label: "Fecha fin", type: 'date', value: DateEnd}    
  ];

  const generateInputs = (inputs) => {
  return inputs.map((input, index) => {
    const value = inputValues[index];
    const handleInputChange = (event) => {
      const newValues = [...inputValues];
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
      newValues[index] = newValue;
      setInputValues(newValues);
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
            onClick={() => {
              handleInputClick(index);
            }}
            onKeyPress={(e) => {
              HandleDecimalNumber(e, e.target.value);
            }}
          />
          <span className="tooltip-message" style={{ top: input.top }}>
            {input.info}
          </span>
        </label>
      </div>
    );
  });
};
  return (
    <>
      {!ShowError ? (
        <Error429 />
      ) : (
        <>
          <div className="ShowFormButtonContainer">
            <button className="ButtonAccordions" onClick={() => setShowForm(!showForm)}>
              {!showForm ? (
          <FontAwesomeIcon icon={faCircleChevronDown} size="2x" style={{ color: '#5DADE2' }} />                
              ) : (
                <FontAwesomeIcon icon={faCircleChevronUp} size="2x" style={{ color: '#5DADE2' }} />
              )}
            </button>
          </div>
          <AnimationWrapper show={showForm}>
            <form onSubmit={HandleFormsInput}>             
              {generateInputs(inputs.slice(0, 9))}            
              <div className="UnitsData">
                <label htmlFor="options-select">unidades:</label>
                <select
                  className="SelectUnid"
                  id="options-select"
                  value={selectedOption}
                  onChange={handleOptionChange}>
                  <option value="miles">Millas</option>
                  <option value="kilometers">Kilómetros</option>
                </select>
                <button className="ButtonSend" type="submit" onClick={(e) => HandleButton(e)}>
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
