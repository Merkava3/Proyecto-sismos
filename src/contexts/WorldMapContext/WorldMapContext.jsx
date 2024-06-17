import React, {createContext } from 'react';
import useWMWithControls from '../../hooks/useWMWithControls/useWMWithControls'


export const WorldMapContext = createContext()

export const WorldMapContextProvider = ({ children }) => {
  
  const Controls = useWMWithControls()  

  return (
    <WorldMapContext.Provider value={Controls}>
      { children }
    </WorldMapContext.Provider>
  )

}





