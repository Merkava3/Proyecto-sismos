import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { calcularMomentoSismico, calcularMw } from '../../utils/Sismologia';
import TableScale from '../../utils/TableScale';
import ButtonModal from '../ButtonModal/ButtonModal';
import './style/MomentoCalculator.css';

/**
 * MomentoCalculator — Calculadora de Escala de Momento Sísmico (Mw)
 *
 * Reutiliza el componente Modal visual (ButtonModal + overlay) sin acoplar
 * la lógica al Modal de Richter. El resultado se muestra en la misma
 * ventana modal con la paleta de colores de TableScale.
 */
const MomentoCalculator = () => {
  const [area, setArea]               = useState('');
  const [desliz, setDesliz]           = useState('');
  const [rigidez, setRigidez]         = useState('');
  const [result, setResult]           = useState(null);   // { mw, m0, scaleInfo }
  const [showModal, setShowModal]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const a  = parseFloat(area);
    const d  = parseFloat(desliz);
    const mu = rigidez ? parseFloat(rigidez) : undefined; // undefined → usa default

    if (!a || !d || a <= 0 || d <= 0) return;

    const m0        = calcularMomentoSismico(a, d, mu);
    const mw        = calcularMw(m0);
    const scaleInfo = TableScale(mw);

    setResult({ mw, m0, scaleInfo });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const isEmpty = !area.trim() || !desliz.trim();

  return (
    <>
      <h1 className="Title">Escala de Momento Sísmico</h1>

      <div className="Box">
        <form className="FormContainer" onSubmit={handleSubmit}>

          <label className="LabelName" htmlFor="mw-area">Área de ruptura (m²)</label>
          <input
            id="mw-area"
            className="InputText"
            type="number"
            min="0"
            step="any"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Ej: 40000"
            required
          />

          <label className="LabelName" htmlFor="mw-desliz">Deslizamiento promedio (m)</label>
          <input
            id="mw-desliz"
            className="InputText"
            type="number"
            min="0"
            step="any"
            value={desliz}
            onChange={(e) => setDesliz(e.target.value)}
            placeholder="Ej: 0.5"
            required
          />

          <label className="LabelName" htmlFor="mw-rigidez">
            Rigidez µ (Pa) — <span className="LabelOptional">opcional, default 30 GPa</span>
          </label>
          <input
            id="mw-rigidez"
            className="InputText"
            type="number"
            min="0"
            step="any"
            value={rigidez}
            onChange={(e) => setRigidez(e.target.value)}
            placeholder="Ej: 3e10 = 30000000000"
          />

          {/* Reutiliza ButtonModal del proyecto */}
          <ButtonModal
            Click={handleSubmit}
            title="Calcular Mw"
            disabled={isEmpty}
          />
        </form>
      </div>

      {/* ── Modal de resultado ─────────────────────────────── */}
      <div
        className={`ModalWrapper ${showModal ? 'show' : ''}`}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-label="Resultado de magnitud de momento"
      >
        <div
          className="ContainerMsg MwModal"
          style={{ border: `3px solid ${result?.scaleInfo?.color || 'var(--brand-primary)'}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <FontAwesomeIcon
            className="CloseButton"
            size="3x"
            icon={faCircleXmark}
            color={result?.scaleInfo?.color || 'var(--brand-primary)'}
            onClick={handleClose}
          />

          <h1>Escala de Momento Sísmico</h1>

          {result && (
            <div
              className="ColorContainer"
              style={{ backgroundColor: result.scaleInfo?.color || 'var(--bg-tertiary)' }}
            >
              {/* Magnitud principal */}
              <p className="Scale">Mw {result.mw}</p>

              {/* Descripción de la escala */}
              <h3>{result.scaleInfo?.msg || 'Magnitud fuera de rango estándar'}</h3>

              {/* Datos técnicos */}
              <div className="MwDetails">
                <span>M₀ = {result.m0.toExponential(2)} N·m</span>
              </div>

              <a
                href="https://es.wikipedia.org/wiki/Escala_de_magnitud_de_momento"
                target="_blank"
                rel="noopener noreferrer"
              >
                Más sobre la escala Mw →
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MomentoCalculator;
