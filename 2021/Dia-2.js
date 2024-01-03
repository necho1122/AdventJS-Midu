const carta = 'bici coche balón _playstation bici coche peluche'

export default function listGifts(letter) {

  const textToArray = letter.split(/\s+/);
  const clearArray = textToArray.filter((item) => item[0] !== "_" && item !== "");
  
  const gifts = clearArray.reduce((gifts, item) => {
    gifts[item] = (gifts[item] || 0) + 1;
    return gifts;
  }, {});

  return gifts;
}

const regalos = listGifts(carta);

console.log(regalos);