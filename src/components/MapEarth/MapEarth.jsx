import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style/MapEarth.css';
import Load from '../Load/Load';

const defaultMapZoom = 5;

const createMap = (mapContainer, latitude, longitude) => {
  const map = L.map(mapContainer, {
    zoomControl: false
  }).setView([latitude, longitude], defaultMapZoom);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  return map;
};

const addMarkers = (map, places) => {
  
  places.forEach((place) => {
    const popupContent = `
      <div class="custom-popup">
        <h3 class="infoTitle">${place.Title}</h3>
        <p class="info">
          City: ${place.City}
          <br/>
          Estado: ${place.Subnational}
          <br/>
          fecha : ${place.Date}
          <br/>
          Magnitude: ${place.Magnitude}
          <br/>
          url: <a href=${place.url} target="_blank"> Mas info...</a>   
        </p>   
      </div>
    `;
    const marker = L.marker([place.locations[0], place.locations[1]]);
    marker.bindPopup(popupContent, {
      className: 'custom-popup-style'
    });
    marker.addTo(map);
  });
};

const MapEarth = ({ geodata,place,loading }) => { 
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
 

  useEffect(() => {
    const { latitude, longitude } = geodata;

    if (mapContainerRef.current) {
      if (mapRef.current) {
        // Fly to the new coordinates with animation
        mapRef.current.flyTo([latitude, longitude], defaultMapZoom, {
          animate: true,
          duration: 1.5 // Adjust the duration of the animation as needed
        });
      } else {
        const map = createMap(mapContainerRef.current, latitude, longitude);
        mapRef.current = map;
      }

      if (place.length > 0) {
        // Clear previous markers
        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            mapRef.current.removeLayer(layer);
          }
        });

        // Add new markers
        addMarkers(mapRef.current, place);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [geodata, place]);
// <p className='TextLoading'>Cargando marcadores...</p>     
  return (
  <div className="MapContainerForm">
      <div className="map-wrapper">
        {loading && (
          <div className="loading-indicator">
            <Load />           
          </div>
        )}
        <div id="map" ref={mapContainerRef} className="leaflet-container"></div>
      </div>
    </div>
  );
};

export default MapEarth;