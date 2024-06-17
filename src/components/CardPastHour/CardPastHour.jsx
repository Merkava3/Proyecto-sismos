import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainCity } from '@fortawesome/free-solid-svg-icons';
import MapModalPastHour from '../MapModalPastHour/MapModalPastHour'
import Load from '../Load/Load'
import './style/CardPastHour.css'

const CardPastHour = ({ place }) =>{
  const [Location, setLocation] = useState([]);
  const [selectedModalIndex, setSelectedModalIndex] = useState(-1);
  const [InfoEarthquake, setInfoEarthquake] = useState({})
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index,location, place) => {
    setSelectedModalIndex(index);
    setModalOpen(true);
    setLocation(location)
    setInfoEarthquake(place)
  };
  
  const closeModal = () => {
    setSelectedModalIndex(-1);
    setModalOpen(false);
  };
  
  useEffect(() => {
    if (Array.isArray(place) && place.length > 0) {
      console.log("Estamos en lugares: ", place);
    }
  }, [place]);  
  
  
  return(
  
     <div className="CardRember">       
      {Array.isArray(place) ? (
        place.map((places, index) => (
          <div className="tarjeta" key={index}>
            <h3 className='textTitleCard'>{places.Title}</h3>
            <p className='MwMagnitude'>{places.Magnitude} Mw</p>
            <img className="IconCard" src="https://cdn-icons-png.flaticon.com/512/6078/6078551.png" alt="Icon" />
            <p className='CityCard'>{places.City}</p>
            <button className="CardButton" onClick={() => openModal(index, places.locations, places)}>ver mapa</button>
          </div>
        ))
      ) : (
       
        <div className='ContainerLoad'>
        <Load/>
        </div>
      )}
      {modalOpen && (
        <MapModalPastHour isOpen={true} onClose={closeModal} coordinates={Location} place={InfoEarthquake}/>
      )}
    </div>
  )
}
export default CardPastHour