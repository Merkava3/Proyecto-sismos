import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style/MapQuake.css';

/**
 * MapQuake component to render a Leaflet map for a specific earthquake location.
 */
const MapQuake = ({ location, place }) => {
  // Use standardized PascalCase keys from refactored Helpers.js
  const magnitude = place.Magnitude || "N/A";
  const locationName = place.Subnational || "Desconocida";
  const lat = location?.[0];
  const lng = location?.[1];

  if (!location || isNaN(lat) || isNaN(lng)) {
    return (
      <div className="ContainerMap ErrorState">
        <p>Ubicación no disponible para este evento.</p>
      </div>
    );
  }

  const popupContent = (
    <div className='InfoPopup'>    
      <p><strong>Magnitud:</strong> {magnitude} Mw</p>
      <p><strong>Ubicación:</strong> {locationName}</p>
      <p><strong>Coordenadas:</strong> {lat.toFixed(4)}, {lng.toFixed(4)}</p>
    </div>
  );
  
  return (
    <MapContainer 
      center={location} 
      zoom={7} 
      className='ContainerMap' 
      scrollWheelZoom={true} 
      dragging={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapQuake;
