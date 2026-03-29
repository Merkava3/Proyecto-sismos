import { formatEarthquakeData, generateLocalUrl } from './Helpers';

describe('Helpers Service', () => {
  describe('formatEarthquakeData', () => {
    it('debería retornar un arreglo vacío si el input no es un arreglo', () => {
      expect(formatEarthquakeData(null)).toEqual([]);
      expect(formatEarthquakeData(undefined)).toEqual([]);
      expect(formatEarthquakeData({})).toEqual([]);
    });

    it('debería formatear correctamente los campos faltantes con defaults', () => {
      const rawData = [{}];
      const result = formatEarthquakeData(rawData);
      
      expect(result[0].Title).toBe("Sismo Detectado");
      expect(result[0].City).toBe("Cerca de la ciudad");
      expect(result[0].Magnitude).toBe("N/A");
      expect(result[0].locations).toEqual([0, 0]);
    });

    it('debería formatear los datos existentes incluyendo fechas', () => {
      const timestamp = new Date('2026-03-25T10:00:00Z').getTime();
      const rawData = [{
        title: "Sismo de 5.5",
        city: "Bogotá",
        magnitude: 5.5,
        date: timestamp,
        latitude: "4.711",
        longitude: "-74.072"
      }];

      const result = formatEarthquakeData(rawData);
      expect(result[0].Title).toBe("Sismo de 5.5");
      expect(result[0].City).toBe("Bogotá");
      expect(result[0].locations).toEqual([4.711, -74.072]);
      expect(typeof result[0].Date).toBe('string');
      expect(result[0].Date).not.toBe('Fecha inválida');
    });
  });

  describe('generateLocalUrl', () => {
    it('debería mapear AllEarthquakes,PastDay a /feeds/past-day/m4.5/', () => {
      const result = generateLocalUrl({}, "AllEarthquakes,PastDay");
      expect(result.apiUrl).toContain("/feeds/past-day/m4.5/");
      expect(result.options.method).toBe('GET');
    });

    it('debería limpiar y procesar los requerimientos para Earthquakes genérico', () => {
      const reqs = {
        latitude: "4.5",
        longitude: "-74.2",
        radius: 500,
        maliciousKey: 'drop database'
      };
      const result = generateLocalUrl(reqs, "Earthquakes");
      
      expect(result.apiUrl).toContain("latitude=4.5");
      expect(result.apiUrl).toContain("longitude=-74.2");
      expect(result.apiUrl).toContain("radius=500");
      expect(result.apiUrl).not.toContain("maliciousKey");
      expect(result.apiUrl).toContain("https://api-earthquake.onrender.com/api/earthquakes/");
    });

    it('debería retornar nulo ante un nombre desconocido', () => {
      const result = generateLocalUrl({}, "UnknownServiceQuery");
      expect(result).toBeNull();
    });
  });
});
