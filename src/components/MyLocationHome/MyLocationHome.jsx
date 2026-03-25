import React, { useState, useEffect } from 'react';
import GeoApi from '../../services/GeoApi/GeoApi';
import Error429 from '../Error429/Error429';
import Load from '../Load/Load';
import './style/MyLocationHome.css';

/**
 * Displays the most recent earthquake nearest to the user's geolocation.
 * Uses the browser Geolocation API and fetches a single closest event.
 */
const MyLocationHome = () => {
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true);
  const [place, setPlace] = useState([]);
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocationDenied(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchNearestEarthquake(position.coords.latitude, position.coords.longitude);
      },
      () => setLocationDenied(true)
    );
  }, []);

  const fetchNearestEarthquake = async (lat, lon) => {
    setLoading(true);
    const requirements = { latitude: lat, longitude: lon };
    const api = new GeoApi(requirements, "LatestEarthquakeNearMe");
    try {
      const result = await api.getDataWithCaching();
      setPlace(result.result || []);
      setShowError(result.show);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="MyLocationLoader"><Load /></div>;
  if (!showError) return <Error429 />;
  if (locationDenied) return (
    <div className="MyLocationDenied">
      <p>Activa la geolocalización para ver sismos cercanos.</p>
    </div>
  );

  return (
    <div className="MyLocationWrapper">
      {place.length > 0 ? place.map((p, index) => (
        <article key={index} className="MyLocationCard">
          <div className="MyLocationBlob" aria-hidden="true" />
          <div className="MyLocationContent">
            <span className="MyLocationBadge">Sismo más cercano</span>
            <h3 className="MyLocationTitle">{p.Title}</h3>
            <p className="MyLocationDate">{p.Date}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="MyLocationLink"
              aria-label={`Ver más información sobre ${p.Title}`}
            >
              Más info →
            </a>
          </div>
        </article>
      )) : (
        <div className="MyLocationEmpty">
          <p>No se encontraron sismos recientes en tu zona.</p>
        </div>
      )}
    </div>
  );
};

export default MyLocationHome;