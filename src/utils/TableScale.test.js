import TableScale from './TableScale';

describe('TableScale Util', () => {
  it('debería retornar false si el número es -Infinity o inválido', () => {
    expect(TableScale(-Infinity)).toBe(false);
    expect(TableScale(NaN)).toBe(false);
  });

  it('debería retornar nivel verde (Microsismo) para números bajos (<=3.5)', () => {
    const result = TableScale(3.0);
    expect(result.color).toBe('#27AE60');
    expect(result.msg).toContain('Microsismo');
    expect(result.number).toBe('3.0');
  });

  it('debería retornar nivel verde oscuro para (3.5 < n <= 5.4)', () => {
    const result = TableScale(4.5);
    expect(result.color).toBe('#1E8449');
    expect(result.msg).toContain('Sentido por algunas personas');
    expect(result).toHaveProperty('number', '4.5');
  });

  it('debería retornar amarillo para sismos medios (5.5 - 6.0)', () => {
    const result = TableScale(5.8);
    expect(result.color).toBe('#F1C40F');
    expect(result.msg).toContain('dentro de edificios');
  });

  it('debería retornar color naranja para sismos fuertes (6.1 - 7.0)', () => {
    const result = TableScale(6.5);
    expect(result.color).toBe('#D68910');
    expect(result.msg).toContain('fuera del edificios');
  });

  it('debería retornar rojo oscuro para sismos destructivos (7.1 - 7.9)', () => {
    const result = TableScale(7.5);
    expect(result.color).toBe('#B03A2E');
    expect(result.msg).toContain('daños serios');
  });

  it('debería retornar rojo brillante para sismos catastróficos (>=8.0)', () => {
    const result = TableScale(8.5);
    expect(result.color).toBe('red');
    expect(result.msg).toContain('daños muy grandes');
  });
});
