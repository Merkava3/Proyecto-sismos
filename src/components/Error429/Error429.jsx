import React from 'react';
import './style/Error429.css';

/**
 * Componente mostrado cuando la API alcanza el límite de peticiones (Rate Limit 429).
 */
const Error429 = () => {
  return (
    <article className="ErrorContainer429">
      <div className="ErrorCard429">
        <h1 className="ErrorTitle429">Error 429</h1>
        <p className="ErrorMsg429">El servidor está sobrecargado con peticiones. Por favor, espera unos minutos e intenta nuevamente.</p>
        <div className="ErrorIconWrapper">
          <span role="img" aria-label="Alerta" className="ErrorEmoji429">⚠️</span>
        </div>
      </div>
    </article>
  );
};

export default Error429;
