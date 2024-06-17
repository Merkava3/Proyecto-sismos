import React, { useState, useEffect } from 'react';
import GeoApi from '../../services/GeoApi/GeoApi';
import GeoData from '../../data/Requeriments';
import CardAllUrl from '../CardAllUrl/CardAllUrl';
import Load from '../Load/Load';
import './style/AllEarthquakes.css';

const AllEarthquakes = ({ type, resetData }) => {
  const [City, setCity] = useState('');
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  //const endIndex = startIndex + itemsPerPage;
  console.log(type); 
  


  useEffect(() => {
    if (resetData) {
      setPlace([]); // Limpiar datos cuando resetData sea true
    }
    
    const ApiExecute = async () => {
      setLoading(true);
      const geoApi = new GeoApi(GeoData, type);
      await geoApi.clearCacheIfNeeded(); // Llamar a clearCacheIfNeeded antes de obtener los datos
      const result = await geoApi.getDataWithCaching();
      setPlace(result.result);
      setShowError(result.show);
      setLoading(false);
    };

    ApiExecute();
    
  }, [type, resetData]); // Agrega type como dependencia para que el useEffect se ejecute cuando type cambie

  useEffect(() => {
    console.log(place);
  }, [place]);

  const handleCitySearch = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
    setPage(1); // Resetear la página al buscar una ciudad nueva
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="SearchCity">
        <label htmlFor="inputCity" className="LabelCity">
          Ingrese ciudad:
        </label>
        <input type="text" name="inputCity" value={City} onChange={handleCitySearch} />
      </div>
      {loading ? (
       <div className = "loaderall"> 
        <Load />
         </div>
      ) : (
        <CardAllUrl
          place={place}
          City={City}
          page={page}
          itemsPerPage={itemsPerPage}
          handlePageChange={setPage}
        />
      )}
    </>
  );
};

export default AllEarthquakes;
