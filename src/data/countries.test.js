import Countries, { Coords } from './countries';

describe('Countries Data & Coords Util', () => {
  it('debería exportar un arreglo de países', () => {
    expect(Array.isArray(Countries)).toBe(true);
    expect(Countries.length).toBeGreaterThan(100);
  });

  describe('Coords', () => {
    it('debería retornar latitud y longitud dado un nombre de país exacto', () => {
      const result = Coords('Colombia');
      expect(result).toEqual(['4.5709', '-74.2973']);
    });

    it('debería retornar latitud y longitud lidiando con mayúsculas/minúsculas', () => {
      const result = Coords('coLoMbIa');
      expect(result).toEqual(['4.5709', '-74.2973']);
    });

    it('debería retornar null si el país no existe', () => {
      expect(Coords('PaísFalso')).toBeNull();
    });
  });
});
