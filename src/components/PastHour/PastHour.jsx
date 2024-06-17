import React, { useState, useEffect } from 'react'
import GeoApi from '../../services/GeoApi/GeoApi'
import GeoData from '../../data/Requeriments'
import Error429 from '../Error429/Error429'
import CardPastHour from '../CardPastHour/CardPastHour'
import './style/PastHour.css'

const PastHour = () => {

  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true); 

useEffect(()=> {  
},[])  
  
  useEffect(() => {
    let timeoutId;
    if (!showError) {
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 5 * 60 * 1000); // Esperar 5 minutos en milisegundos antes de cambiar a true
    } else {
      ApiExecute();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showError]);

  const ApiExecute = () => {
    setLoading(true);    
    const geoApi = new GeoApi(GeoData, "AllEarthquakes,PastHour");   
    geoApi.getDataWithCaching().then((result) => {
      setPlace(result.result);
      setShowError(result.show);
      setLoading(false);
    });
  };
  useEffect(() => {    
  }, [place]);
  
  
  return(
    <>
    <h1 className = 'TitleHour'> Sismos en las ultimas horas </h1>
    <div className='gallery'>     
     <CardPastHour place={place} />
    </div>
    </>
  )
}
export default PastHour