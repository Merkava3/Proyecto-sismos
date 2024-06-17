import GeoApi from '../../services/GeoApi/GeoApi'
import React, { useState} from 'react';
import Countries, { Coords } from '../../data/countries';
import {handleOnchangeNum} from '../../utils/validation'
import GeoData from '../../data/Requeriments'


const useWMWithControls  = () => {
  
  const [country, setCountry] = useState(Countries[0]["País"]);
  const [showError, setShowError] = useState(true);
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(false);
  const [isMagnitudeSelectOpen, setIsMagnitudeSelectOpen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [Magnitude, SetMagitud] = useState(3)
  const [Counter, SetCounter] = useState(5)     
  const [Type, setType] = useState("Earthquakes")
  const [ShowUnits, setShowUnits] = useState(false)  
  const [Radius,setRadius] = useState("")
  const [Km, setKm] = useState(false)
  const [Miles, SetMiles] = useState(false)
  const [Units, setUnits] = useState("kilometers")


  const ApiExecute = () => {
    setLoading(true);   
    const geoApi = new GeoApi(GeoData, Type);   
    geoApi.getDataWithCaching().then((result) => {
      setPlace(result.result);
      console.log(result.result)
      setShowError(result.show);
      setLoading(false);
    });
  };

   const HandleCountries = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  const HandleCheckBox = (e) => {
    console.log(e.target.checked)
    if(e.target.checked){
      setType("RecentEarthquakes")      
    }else{
      setType("Earthquakes")      
    }   
  };

   const HandleButton = (e) => {
    e.preventDefault();   
    const [lat, lon] = Coords(country)    
    GeoData.latitude = lat;
    GeoData.longitude = lon;
    GeoData.count = Counter;
    GeoData.magnitude = Magnitude;   
    GeoData.radius = Radius === 0 ? 500 : GeoData.radius;
    GeoData.units = Units;      
    ApiExecute();   
  };

  const handleMagnitudeSelect = (e) => {
    e.preventDefault();
    SetMagitud(e.target.value)    
  }
  
  const HadleMagnitude = () => {
    setIsMagnitudeSelectOpen(!isMagnitudeSelectOpen);    
  };
  
  const HadleCount = (e) => {
    setButtonActive(!buttonActive)   
  };
  
  const HandleUnits = () =>{
    setShowUnits(!ShowUnits)  
  };
  
  const HandleKM = (e) => {
    setKm(true)
    SetMiles(false)
    setUnits("kilometers")
  } 
  
  const HandleMiles = (e) => {
    setKm(false)
    SetMiles(true)
    setUnits("miles")   
    }
  
const handleIncrement = (e) => {
     e.preventDefault();
    if (Counter < 100) {
      SetCounter(Counter + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (Counter > 0) {
       SetCounter(Counter - 1);
    }   
  };

    const opcionesPaises = Countries.map((pais) => (
    <option key={pais["País"]} value={pais["País"]}>
      {pais["País"]}
    </option>
  )); 

  const MagnitudScale = Array.from({ length: 9 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));  
  
  
  return {
    ApiExecute,
    country,
    showError,
    HandleCountries,
    opcionesPaises,
    HandleButton,
    HadleMagnitude,
    MagnitudScale,
    HandleCheckBox,
    isMagnitudeSelectOpen,
    handleMagnitudeSelect,
    Magnitude,
    setRadius,
    HandleMiles,
    Units,
    ShowUnits,
    HandleUnits,
    HandleKM,
    HadleCount,
    buttonActive,
    handleOnchangeNum,
    handleIncrement,
    handleDecrement,    
    GeoData,    
    place,
    Km,
    Miles,
    loading,
    Counter,
    Radius,
  }; 
};
export default useWMWithControls