import React,{useEffect,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faHouseCrack, faLocationDot,faGlobe } from '@fortawesome/free-solid-svg-icons';
import {WorldMapContext} from '../../contexts/WorldMapContext/WorldMapContext'
import Error429 from '../Error429/Error429'
import  MapEarth from '../MapEarth/MapEarth'
import './style/WorldMapWithControls.css'
import 'animate.css';

const WorldMapWithControls = () => {
  
  const Controls = useContext(WorldMapContext)
   
    useEffect(() => {
    let timeoutId;
    if (!Controls.showError) {
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 5 * 60 * 1000); // Esperar 5 minutos en milisegundos antes de cambiar a true
    } else {
      Controls.ApiExecute();
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [Controls.showError]);
  
  return (
    <div>
      {!Controls.showError?(
           <Error429/>
      ):(
        <>
        <div className='WrapperCoords'>
          <div className='WrapperSelect'>
              <label htmlFor="paisesSelect" className='LabelCoords'>Elige un país:</label>
          <select className='SelectCoords' name="paises" id="paisesSelect" onBlur={Controls.HandleCountries}>
                {Controls.opcionesPaises}
              </select> 
           <button className='ButtonCalculer' onClick={Controls.HandleButton}>
            <FontAwesomeIcon icon={faLocationArrow} size="2x" color="white"/>
           </button>
             <div className="Recients">
                <label htmlFor="vehicle1">Recientes : </label>              
                <input type="checkbox"  name="Recient" value="Reciente" onClick = {Controls.HandleCheckBox}/>
              </div>              
          </div> 
          
          <div className='WrapperOptions'>
            <div className="OptionMagnitud">
            <button className='ButtonOptions' onClick={Controls.HadleMagnitude}>
                  <FontAwesomeIcon icon={faHouseCrack} className="ButtonOptionsIcon"/>
                  <p className='ButtonOptionsTitle'> Magitud </p>
                </button>
               {Controls.isMagnitudeSelectOpen && (
                  <>
              <select className="SelectMagnitude animate__animated animate__bounceIn" name="magnitude" id="magnitude" onChange={Controls.handleMagnitudeSelect}>
                      {Controls.MagnitudScale}
                    </select>
                  </>
                )}              
            </div>
            <div className="OptionCount">
               <button className='ButtonOptions' onClick={Controls.HadleCount}>
                  <FontAwesomeIcon icon={faLocationDot} className="ButtonOptionsIcon" />
                  <p className='ButtonOptionsTitle'> Numero Sismos </p>
                </button>

              {Controls.buttonActive && (          
          <div className="SelectCount animate__animated animate__bounceIn">
            <div className='ContainerCount'>
         <button className='CountIncrementar' onClick={Controls.handleIncrement}>+</button>
           <span>{Controls.Counter}</span>
          <button className='CountDercrementar' onClick={Controls.handleDecrement}>-</button>
          </div>
            </div>      
                )}        
            
            </div>   
            <div className="OptionUnits">
               <button className="ButtonOptions" onClick={Controls.HandleUnits}>
              <FontAwesomeIcon icon={faGlobe} className="ButtonOptionsIcon" />
              <p className='ButtonOptionsTitle'> Radio  </p>            
            </button>
              {Controls.ShowUnits &&(
              <div className = "ContainerUnits animate__animated animate__bounceIn">
  <input type="text"
    name="Units"
    value={Controls.Radius}
    className="inputUnits"
    onChange = {(e) => {Controls.setRadius(e.target.value)}}
    onKeyPress = {(e) => Controls.handleOnchangeNum(e,Controls.Radius)}    
    placeholder = "Ingrese el radio"/>
                
                <div className='OpUntisChecbox'> 
                <div className="InputUnitsKm">
                <label htmlFor="KM"> Km: </label>              
    <input type="checkbox" checked={Controls.Km} name="Km" value="Km" onChange={Controls.HandleKM} />
                </div>
                  
                 <label htmlFor="Miles"> Miles: </label>              
  <input type="checkbox" checked={Controls.Miles} name="Miles" value="Miles" onChange={Controls.HandleMiles}/>
                </div>            
                
              </div>          
              )}              
            </div>            
          </div>          
        </div>
           <MapEarth geodata={Controls.GeoData} place={Controls.place} loading={Controls.loading} />
        </>
      )}
      
    </div>
  
  )
}

export default  WorldMapWithControls