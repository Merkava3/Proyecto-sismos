import React from 'react';
import RichterHook from '../../hooks/RichterHook/RichterHook'
import './style/RichterCalculator.css'
import Modal from '../Modal/Modal'
import Error429 from '../Error429/Error429'
import AppRouter from '../../routers/AppRoueter/AppRouter'

const RichterCalculator = () => {

  const {
    diferencia,
    setDiferencia,
    amplitud,
    setAmplitud,
    movimiento,    
    scaleInfo,    
    HandleSubmit,
    Empty,
    handleKeyPress,
  } = RichterHook()
  
  return (
    <>
      <h1 className = "Title" >Escala de Ritcher</h1>
      <div className = 'Box'>
        <form className = "FormContainer" onSubmit = {HandleSubmit}>          
          {/* Amplitud */}
          <label className ="LabelName" htmlFor="amplitud"> Amplitud: </label>
          <input className="InputText"
            type = "text"
            name ="amplitud"            
            value = {amplitud}
            onChange={(e) => {setAmplitud(e.target.value)}} 
            placeholder = "Ingrese amplitud"
            onKeyPress = {(e) => handleKeyPress(e,amplitud)}
            required/>           

            {/* Diferencia */}
          <label className ="LabelName" htmlFor="amplitud"> Diferencia: </label>
          <input className= "InputText"          
            type = "text"
            name ="diferencia"              
            value = {diferencia}
            onChange = {(e) => {setDiferencia(e.target.value)}} 
            placeholder = "Ingrese diferencia"
            onKeyPress = {(e) => handleKeyPress(e,diferencia)}  
            required/>         
            {/* Ventana modal es un boton */} 
          
            <Modal 
              movimiento = {movimiento}
              showModal = {Empty}
              scaleInfo={scaleInfo}/>        
        </form>       
      </div>     
    </>
  )
  
}

export default RichterCalculator

 