import React , { useState, useEffect }  from 'react';
import './style/MapModalPastHour.css'
import MapQuake from '../MapQuake/MapQuake'

const MapModalPastHour = ({ isOpen, onClose, coordinates, place}) =>{
   useEffect(() => {
    console.log("Modal - ", place)    
  },[place])
  console.log(place.Title)
  return (
     isOpen && (
      <div className="map-modal">
        <div className="map-modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <div className='InfoModalCard'>
          <h3>{place.Title}</h3>
          <a href={place.url} target="_blank"> Mas info...</a>   
          <p>{place.Date}</p>
            </div>         
          <MapQuake location={coordinates} place={place}/>
        </div>
      </div>
    )
  )
}
export default MapModalPastHour