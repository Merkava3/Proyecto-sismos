import { 
  calcularMomentoSismico, 
  calcularMw, 
  RIGIDEZ_ESTANDAR 
} from './Sismologia';

describe('Sismologia Utils', () => {

  describe('calcularMomentoSismico', () => {
    it('debería calcular correctamente el momento sísmico con la rigidez estándar', () => {
      const area = 40000;
      const desplazamiento = 2.5;
      const m0 = calcularMomentoSismico(area, desplazamiento);
      
      expect(m0).toBe(RIGIDEZ_ESTANDAR * area * desplazamiento);
      expect(m0).toBe(3e15); // 3e10 * 40000 * 2.5
    });

    it('debería permitir pasar una rigidez personalizada', () => {
      const area = 100;
      const dev = 1;
      const rigidezPropia = 50; 
      
      const m0 = calcularMomentoSismico(area, dev, rigidezPropia);
      expect(m0).toBe(5000);
    });

    it('debería manejar valores en cero', () => {
      expect(calcularMomentoSismico(0, 5)).toBe(0);
      expect(calcularMomentoSismico(100, 0)).toBe(0);
    });
  });

  describe('calcularMw', () => {
    it('debería retornar 0 si m0 es falsy o menor o igual a cero', () => {
      expect(calcularMw(0)).toBe(0);
      expect(calcularMw(-100)).toBe(0);
      expect(calcularMw(null)).toBe(0);
      expect(calcularMw(undefined)).toBe(0);
    });

    it('debería calcular la magnitud de momento correctamente (retorno redondeado a 2 decimales)', () => {
      const m0 = 3.98e15; // Un M0 típico
      const mw = calcularMw(m0);
      
      // Mw = (2/3) * log10(m0) - 9.1
      // log10(3.98e15) ~= 15.6
      // (2/3) * 15.6 ~= 10.4
      // 10.4 - 9.1 ~= 1.3
      expect(mw).toBe(1.30);
    });
  });
});
