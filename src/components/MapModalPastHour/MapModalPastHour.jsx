import React from 'react';
import MapQuake from '../MapQuake/MapQuake';
import './style/MapModalPastHour.css';

/**
 * Modal component for displaying earthquake map details.
 */
const MapModalPastHour = ({ isOpen, onClose, coordinates, place }) => {
  if (!isOpen) return null;

  // Use capitalized properties from formatEarthquakeData
  const title = place.Title || "Detalles del Sismo";
  const date = place.Date || "Fecha desconocida";
  const url = place.url || "#";

  return (
    <div className="map-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="map-modal-content" role="dialog" aria-modal="true">
        <span 
          className="close-button" 
          onClick={onClose}
          aria-label="Cerrar modal"
          title="Cerrar"
        >
          &times;
        </span>
        
        <div className='InfoModalCard'>
          <h3>{title}</h3>
          <p>{date}</p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Ver más información sobre el sismo: ${title}`}
          >
            Ver detalles del evento &rarr;
          </a>
        </div>         
        
        <div className="map-container">
          <MapQuake location={coordinates} place={place} />
        </div>
      </div>
    </div>
  );
};

export default MapModalPastHour;