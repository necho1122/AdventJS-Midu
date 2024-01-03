function isValid(letter) {
  const letterToArray = Array.from(letter);
  let fisrtCol;
  let secondCol;

  for (let i = 0; i < letterToArray.length; i++) {
    if (letterToArray[i] === '(') {
      fisrtCol = i;
      break;
    }
  }

  for (let i = fisrtCol + 1; i < letterToArray.length; i++) {
    if (letterToArray[i] === ')') {
      secondCol = i;
      break;
    }
  }

  if (fisrtCol === undefined || secondCol === undefined) {
    return false;
  }

  const giftBruto = letterToArray.slice(fisrtCol, secondCol + 1);

  let getInside = true;

  for (let i = 1; i < giftBruto.length; i++) {
    if (giftBruto[i] === '(' || giftBruto[i] === '{' || giftBruto[i] === '[') {
      getInside = false;
      break;
    }
  }

  if (giftBruto.length === 2 || giftBruto.length === 0) {
    getInside = false;
  }

  return getInside;
}

console.log(isValid("dsdds asdk ( () ) jljjaksjaks"));  // Debería imprimir false




/*const tablaValores = {
  '.': 1,
  ',': 5,
  ':': 10,
  ';': 50,
  '!': 100
};

// Ejemplo de uso
const miSimbolo = ';';
const valorAsociado = tablaValores[miSimbolo];

console.log(`El valor asociado al símbolo ${miSimbolo} es: ${valorAsociado}`);*/
