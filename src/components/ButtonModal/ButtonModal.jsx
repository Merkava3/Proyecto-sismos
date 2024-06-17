import React from 'react';
import './style/ButtonModal.css'

const ButtonModal = (props) => {
  return (
    <button className='ButtonEvent' onClick={props.Click}> {props.title}</button>   
  )
}

export default ButtonModal