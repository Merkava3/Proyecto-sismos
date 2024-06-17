import React, { useState, useEffect } from 'react';
import GeoData from '../../data/Requeriments'
import GeoApi from '../../services/GeoApi/GeoApi'
import './style/Quakerecient.css'

const Quakerecient = () =>{

  const [place, setPlace] = useState({});
    useEffect(()=> {
      GeoData.latitude="9.30472"
      GeoData.longitude="-75.39778"
          ApiExecute()
      
    },[])

  useEffect(()=> {        
      
    },[place])
  
  const ApiExecute = () => {   
    const geoApi = new GeoApi(GeoData, "Earthquakes");   
    geoApi.getDataWithCaching().then((result) => {
      setPlace(result.result);
        
    });   
  };
  return (
    <div className='Recient'>
    <h1> estamos aca : {place.title}</h1>
      </div>
  )
}

export default Quakerecient