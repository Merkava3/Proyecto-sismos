import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ButtonModal from '../ButtonModal/ButtonModal';
import './style/Modal.css'

const Modal = ({ movimiento, scaleInfo, showModal }) => {
  
const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClick = () => {
    setIsModalVisible(showModal);
  };
  const handleCloseClick = () => {
    setIsModalVisible(false);
  };
  
  return (
    <>
<ButtonModal Click={handleModalClick} title="Calcular" />
      {/* Apply the CSS class names from ModalStyles.css */}
      <div className={`ModalWrapper ${isModalVisible ? 'show' : ''}`}  onClick={handleCloseClick } >
        <div className="ContainerMsg" style={{ border: `3px solid  ${scaleInfo?.color || 'white'}` }}>
          
       <FontAwesomeIcon className='CloseButton' size='3x' icon={faCircleXmark} color={`${scaleInfo?.color || 'white'}`} />          
          <h1> Escala Ritcher</h1>
          {/* Apply the CSS class names from ModalStyles.css */}
          {movimiento && (
            <div className={`ColorContainer`} style={{ backgroundColor: `${scaleInfo?.color || 'white'}` }}>
              <p className="Scale">{`${scaleInfo?.number || '-------'}`}</p>
              <br />
              <div>
                <h3>{`${scaleInfo?.msg || '-------'}`}</h3>
                <div>
                  <span role="img" aria-label="Emoji"></span>
                </div>
              </div>
              <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ondas_s%C3%ADsmicas_s_p.svg/800px-Ondas_s%C3%ADsmicas_s_p.svg.png" target="_blank">
                <img src="URL_DE_LA_IMAGEN" alt="Explicacion de escala sismologica" />
                Explicacion de escala sismologica
              </a>
            </div>
          )}
        </div>
      </div>    
    </>
  )
}
export default Modal