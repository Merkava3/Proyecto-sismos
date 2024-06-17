import React, { useState} from 'react';
import TableScale  from '../../utils/TableScale'
import Sismos from '../../utils/Sismos'
import handleKeyPress from '../../utils/validation'

const RichterHook = () => {
  const [diferencia, setDiferencia] = useState ('');
  const [amplitud, setAmplitud] = useState('');
  const [movimiento, setMovimiento] = useState(null); 
  const [scaleInfo, setScaleInfo] = useState(null)  

  const Empty = () => {
    return !amplitud.trim() || !diferencia.trim()? false : true    
  }   
  const HandleSubmit = (e) => {
    e.preventDefault()   
    const newMovimiento = new Sismos(amplitud, diferencia);
    setMovimiento(newMovimiento);
    const ScaleInfo = TableScale(newMovimiento.force())  
    setScaleInfo(ScaleInfo)
    reset()
  }  
  
  const reset = () => {  
  setDiferencia('')
  setAmplitud('')  
  } 

  return {
    diferencia,
    setDiferencia,
    amplitud,
    setAmplitud,
    movimiento,    
    scaleInfo,    
    HandleSubmit,
    Empty,
    handleKeyPress,
  }
}
export default RichterHook