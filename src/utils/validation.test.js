import handleKeyPress, { HandleDecimalNumber, handleOnchangeNum } from './validation';

describe('Validation Utils', () => {
  let mockEvent;

  beforeEach(() => {
    mockEvent = {
      preventDefault: jest.fn(),
      key: '',
      keyCode: 0,
    };
  });

  describe('handleKeyPress', () => {
    it('debería prevenir el evento si el input supera 3 dígitos numéricos', () => {
      mockEvent.keyCode = 53; // '5'
      handleKeyPress(mockEvent, '123'); // ya tiene 3, al sumar 1 más fallaría regex
      
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('no debería prevenir el evento si es válido', () => {
      mockEvent.keyCode = 53; // '5'
      handleKeyPress(mockEvent, '12'); // 125 es válido
      
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('HandleDecimalNumber', () => {
    it('debería bloquear letras', () => {
      mockEvent.key = 'a';
      HandleDecimalNumber(mockEvent, '12');
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('debería bloquear múltiples puntos decimales', () => {
      mockEvent.key = '.';
      HandleDecimalNumber(mockEvent, '12.5');
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('no debería bloquear números válidos', () => {
      mockEvent.key = '5';
      HandleDecimalNumber(mockEvent, '12.');
      expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('handleOnchangeNum', () => {
    it('debería prevenir caracteres alfabéticos', () => {
      mockEvent.keyCode = 65; // 'A'
      handleOnchangeNum(mockEvent, '12');
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
    
    it('debería prevenir números mayores a 10000', () => {
      mockEvent.keyCode = 48; // '0'
      // Si el input es '1000', y agregamos '0' -> '10000', lo cual debe bloquear según regex/lógica actual si es >= 10000
      handleOnchangeNum(mockEvent, '1000');
      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
  });
});
