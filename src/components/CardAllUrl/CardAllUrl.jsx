import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainCity } from '@fortawesome/free-solid-svg-icons';
import MapModalPastHour from '../MapModalPastHour/MapModalPastHour';
import Load from '../Load/Load';
import './style/CardAllUrl.css';

const CardAllUrl = ({ place, City, page, itemsPerPage, handlePageChange }) => {
  const filteredPlaces = place.filter((places) =>
    places.City.toLowerCase().includes(City.toLowerCase())
  );
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPlaces = filteredPlaces.slice(startIndex, endIndex);

  const [Location, setLocation] = useState([]);
  const [selectedModalIndex, setSelectedModalIndex] = useState(-1);
  const [InfoEarthquake, setInfoEarthquake] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index, location, place) => {
    setSelectedModalIndex(index);
    setModalOpen(true);
    setLocation(location);
    setInfoEarthquake(place);
  };

  const closeModal = () => {
    setSelectedModalIndex(-1);
    setModalOpen(false);
  };

  return (
    <div className="containerCard">
      {displayedPlaces.length === 0 ? (
        <div className="ContainerLoad">
          <Load />
        </div>
      ) : (
        displayedPlaces.map((places, index) => (
          <div className="tarjeta" key={index}>
            <h3 className="textTitleCard">{places.Title}</h3>
            <p className="MwMagnitude">{places.Magnitude} Mw</p>
            <img
              className="IconCard"
              src="https://cdn-icons-png.flaticon.com/512/6078/6078551.png"
              alt="Icon"
            />
            <p className="CityCard">{places.City}</p>
            <button
              className="CardButton"
              onClick={() => openModal(index, places.locations, places)}
            >
              Ver mapa
            </button>
          </div>
        ))
      )}

      {modalOpen && (
        <MapModalPastHour
          isOpen={true}
          onClose={closeModal}
          coordinates={Location}
          place={InfoEarthquake}
        />
      )}

      {filteredPlaces.length > itemsPerPage && (
        <div className="pagination">
          <button
            className="Btnpagination"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>
          <span>
            Página {page} de {Math.ceil(filteredPlaces.length / itemsPerPage)}
          </span>
          <button
            className="Btnpagination"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(filteredPlaces.length / itemsPerPage)}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default CardAllUrl;
