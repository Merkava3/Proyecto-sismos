import React, { useState, useEffect, useCallback } from 'react';
import GeoApi from '../../services/GeoApi/GeoApi';
import GeoData from '../../data/Requeriments';
import CardPastHour from '../CardPastHour/CardPastHour';
import Load from '../Load/Load';
import './style/PastHour.css';

/**
 * PastHour component to fetch and display earthquakes.
 * Updated to use the generic recent earthquakes endpoint.
 */
const PastHour = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    // Cambiado a "GenericRecent" para obtener la respuesta de /api/recentEarthquakes/ directamente.
    const geoApi = new GeoApi(GeoData, "GenericRecent");
    
    try {
      const result = await geoApi.getDataWithCaching();
      if (result.show) {
        setData(result.result || []);
        setError(null);
      } else {
        setError(result.error || "No se pudo cargar la información.");
      }
    } catch (err) {
      setError("Error de conexión al servidor.");
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [fetchData]);

  return (
    <section aria-labelledby="past-hour-title" className="PastHourSection">
      <h1 id="past-hour-title" className="TitleHour">
        Sismos Recientes Globales
      </h1>
      
      {error && !loading && (
        <div className="ErrorContainer">
          <p>{error}</p>
          <button onClick={fetchData} className="RetryButton">Reintentar</button>
        </div>
      )}

      <div className="gallery">
        {loading ? (
          <div className="LoaderWrapper">
            <Load />
          </div>
        ) : (
          <CardPastHour place={data} />
        )}
      </div>
    </section>
  );
};

export default PastHour;