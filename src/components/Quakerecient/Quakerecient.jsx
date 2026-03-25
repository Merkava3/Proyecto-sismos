import React, { useState, useEffect } from 'react';
import GeoApi from '../../services/GeoApi/GeoApi';
import Load from '../Load/Load';
import './style/Quakerecient.css';

/**
 * QuakeRecient — Muestra el sismo más reciente en unas coordenadas específicas.
 */
const Quakerecient = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchRecent = async () => {
      try {
        const requirements = {
          latitude: '9.30472',
          longitude: '-75.39778',
          radius: '500' // Assuming a default radius for nearest
        };
        
        const geoApi = new GeoApi(requirements, "LatestEarthquakeNearMe", 10);
        const { result, show } = await geoApi.getDataWithCaching();
        
        if (isMounted) {
          if (show && result && result.length > 0) {
            setPlace(result[0]); // Take the first result
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRecent();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="RecientLoader">
        <Load />
      </div>
    );
  }

  if (error || !place) {
    return (
      <div className="RecientEmpty">
        <p>No se encontraron sismos recientes en esta zona.</p>
      </div>
    );
  }

  return (
    <article className="RecientCard">
      <span className="RecientBadge">Sismo Reciente</span>
      <h2 className="RecientTitle">{place.Title || place.title}</h2>
      <p className="RecientDesc">
        <strong>Magnitud:</strong> {place.Magnitude || place.magnitude}<br/>
        <strong>Lugar:</strong> {place.City || place.city}
      </p>
    </article>
  );
};

export default Quakerecient;