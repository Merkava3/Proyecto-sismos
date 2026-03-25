import React, { useState } from 'react';
import MapModalPastHour from '../MapModalPastHour/MapModalPastHour';
import Load from '../Load/Load';
import './style/CardAllUrl.css';

/**
 * CardAllUrl component to display earthquake cards within the Library/AllEarthquakes view.
 */
const CardAllUrl = ({ place, City, page, itemsPerPage, handlePageChange }) => {
  const filteredPlaces = place.filter((item) =>
    (item.City || "").toLowerCase().includes((City || "").toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPlaces = filteredPlaces.slice(startIndex, endIndex);

  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedEarthquake, setSelectedEarthquake] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (location, quakeData) => {
    setSelectedLocation(location);
    setSelectedEarthquake(quakeData);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="LibraryContainer">
      <div className="containerCard">
        {displayedPlaces.length === 0 ? (
          <div className="NoDataWrapper">
            {place.length === 0 ? <Load /> : <p>No se encontraron resultados para esta búsqueda.</p>}
          </div>
        ) : (
          displayedPlaces.map((quake, index) => (
            <div className="tarjeta-all" key={`${quake.Title}-${index}`} onClick={() => openModal(quake.locations, quake)}>
              <h3 className="textTitleCard">{quake.Title}</h3>
              <p className="MwMagnitude">{quake.Magnitude} Mw</p>
              <img
                className="IconCard"
                src="https://cdn-icons-png.flaticon.com/512/6078/6078551.png"
                alt="Icono Sísmico"
              />
              <p className="CityCard">{quake.City}</p>
              <button
                className="CardButton"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(quake.locations, quake);
                }}
              >
                Ver en mapa
              </button>
            </div>
          ))
        )}
      </div>

      {modalOpen && (
        <MapModalPastHour
          isOpen={true}
          onClose={closeModal}
          coordinates={selectedLocation}
          place={selectedEarthquake}
        />
      )}

      {filteredPlaces.length > itemsPerPage && (
        <nav className="pagination" aria-label="Navegación de páginas">
          <button
            className="Btnpagination"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            aria-label="Página anterior"
          >
            Anterior
          </button>
          <span className="PageIndicator">
            Página {page} de {totalPages}
          </span>
          <button
            className="Btnpagination"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            aria-label="Página siguiente"
          >
            Siguiente
          </button>
        </nav>
      )}
    </div>
  );
};

export default CardAllUrl;
