import React from 'react';
import{WorldMapContextProvider} from '../../contexts/WorldMapContext/WorldMapContext'
import WorldMapWithControls from '../../components/WorldMapWithControls/WorldMapWithControls'



const WorldMapPages = () => {
  return(
  <WorldMapContextProvider>    
    <WorldMapWithControls/>
  </WorldMapContextProvider>
  )  
} 

export default WorldMapPages