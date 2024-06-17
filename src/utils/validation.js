const handleKeyPress = (event,value) => { 
  /* Esta función es útil para garantizar que solo se ingresen números y se cumpla con el máximo de tres dígitos en el campo de entrada. Puedes utilizarla en combinación con el componente NumberValidationComponent que creamos anteriormente para mejorar la validación en tiempo real mientras el usuario escribe en el campo de entrada. */
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const isValidInput = /^\d{0,3}$/.test(value + keyValue);

    if (!isValidInput) {
      event.preventDefault();
    }
  };


export function HandleDecimalNumber (event, value) {   
  const key = event.key;  

  // Solo se permiten números y un punto decimal
  const validKeys = /[0-9.-]/;

  // El signo menos solo está permitido como primer caracter
  const minusSign = /^-/;

  // Verifica si la tecla presionada es válida
  if (!validKeys.test(key + value)) {
    event.preventDefault();   
    return;
  }

  // Verifica si el punto decimal es válido
  if (key === "." && value.includes(".")) {
    event.preventDefault();
    return;
  }

  // Verifica si el signo menos es válido
  if (key === "-" && (!minusSign.test(key + value) || event.target.selectionStart !== 0)) {
    event.preventDefault();
    return;
  }
};

export const handleOnchangeNum = (event, value) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
     const newValue = value + keyValue;
    const isValidInput = /^\d+$/.test(newValue) 

    if (!isValidInput || newValue >= 10000) {
      event.preventDefault();
    }
  };

export default handleKeyPress
               
