/**
 * Sismologia - Utilidad para calcular la Magnitud de Momento Sísmico (Mw)
 *
 * Fórmula estándar (Wikipedia / Hanks & Kanamori 1979):
 *   M0  = µ × A × u           (Momento Sísmico en N·m)
 *   Mw  = (2/3) × log10(M0) - 9.1
 *
 * Constantes:
 *   µ = 30 GPa  (módulo de rigidez típico de la corteza terrestre)
 */
export const RIGIDEZ_ESTANDAR = 3e10; // N/m²

/**
 * Calcula el Momento Sísmico M0.
 * @param {number} area          - Área de ruptura en m²
 * @param {number} deslizamiento - Desplazamiento promedio en m
 * @param {number} rigidez       - Módulo de rigidez µ (default 30 GPa)
 * @returns {number} M0 en N·m
 */
export function calcularMomentoSismico(area, deslizamiento, rigidez = RIGIDEZ_ESTANDAR) {
  return rigidez * area * deslizamiento;
}

/**
 * Calcula la Magnitud de Momento (Mw) a partir de M0.
 * @param {number} m0 - Momento sísmico en N·m
 * @returns {number} Mw redondeado a 2 decimales
 */
export function calcularMw(m0) {
  if (!m0 || m0 <= 0) return 0;
  return Number(((2 / 3) * Math.log10(m0) - 9.1).toFixed(2));
}
