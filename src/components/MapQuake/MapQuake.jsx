import React, { useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style/MapQuake.css'

const MapQuake = ({ location, place}) => {
  console.log(location)
  console.log("EStamos en place ",place)

  const popupContent = (
    <div className='InfoPopup'>    
      <p>Magnitude: {place.Magnitude} Mw</p>
      <p>Subnational: {place.Subnational}</p>
      <p>location : {place.locations[0]} , {place.locations[1]} </p>
    </div>
      );
  
  return (
    <MapContainer center={location} zoom={6} className='ContainerMap' scrollWheelZoom={false} dragging={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>{popupContent}</Popup>
      </Marker>
    </MapContainer>
  )
}
export default MapQuake
