import React, { useState } from 'react';
import MapModalPastHour from '../MapModalPastHour/MapModalPastHour';
import './style/CardPastHour.css';

/**
 * CardPastHour component to display a collection of earthquake cards.
 * @param {Object} props - Component properties.
 * @param {Array} props.place - Array of earthquake data.
 */
const CardPastHour = ({ place }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedEarthquake, setSelectedEarthquake] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * Opens the map modal for a specific earthquake.
   */
  const handleOpenModal = (location, data) => {
    setSelectedLocation(location);
    setSelectedEarthquake(data);
    setModalOpen(true);
  };

  /**
   * Closes the map modal.
   */
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLocation(null);
    setSelectedEarthquake(null);
  };

  /**
   * If there are no sismos, we can show a friendly message or nothing.
   * Note: The loader is now handled in the parent component (PastHour).
   */
  if (!Array.isArray(place) || place.length === 0) {
    return (
      <div className="NoDataContainer">
        <p>No se detectaron sismos recientes en esta área.</p>
      </div>
    );
  }

  return (
    <div className="CardContainer">
      {place.map((item, index) => (
        <div key={`${item.title || 'quake'}-${index}`} className="DataCard">
          <h3 className="textTitleCard">{item.title || item.Title}</h3>
          <p className="MwMagnitude">{item.magnitude || item.Magnitude} Mw</p>
          <img 
            className="IconCard" 
            src="https://cdn-icons-png.flaticon.com/512/6078/6078551.png" 
            alt="Icono Sísmico" 
          />
          <p className="CityCard">{item.city || item.City}</p>
          <button 
            className="CardButton" 
            onClick={() => handleOpenModal(item.locations || [0,0], item)}
            aria-label={`Ver mapa de ${item.title || 'Sismo'}`}
          >
            Ver mapa
          </button>
        </div>
      ))}

      {modalOpen && (
        <MapModalPastHour 
          isOpen={true} 
          onClose={handleCloseModal} 
          coordinates={selectedLocation} 
          place={selectedEarthquake} 
        />
      )}
    </div>
  );
};

export default CardPastHour;