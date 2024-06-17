import React , { useState, useEffect }  from 'react';
import GeoApi from '../../services/GeoApi/GeoApi'
import GeoData from '../../data/Requeriments'
import Error429 from '../Error429/Error429'
import Load from '../Load/Load'
import CardAllUrl from '../CardAllUrl/CardAllUrl'
import './style/AllEarthquakes.css'

const AllEarthquakes = ({ type='AllEarthquakes,Past7Days'}) => {
  const [City, setCity] = useState('');
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;  

  useEffect(() => {
    const ApiExecute = () => {
      setLoading(true);
      const geoApi = new GeoApi(GeoData, type);
      geoApi.getDataWithCaching().then((result) => {
        setPlace(result.result);
        setShowError(result.show);
        setLoading(false);
      });
    };

    ApiExecute();
  }, []);
  
  useEffect(()=> {},[place])
  
  const handleCitySearch = (e) => {
    const cityName = e.target.value;
    setCity(cityName);
    setPage(1); // Resetear la página al buscar una ciudad nu
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
      <CardAllUrl
         place={place}
         City={City}        
        page={page}
        itemsPerPage={itemsPerPage}
        handlePageChange={setPage}
      />
    </>
  );
};

export default AllEarthquakes;