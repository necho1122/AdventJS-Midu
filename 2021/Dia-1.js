export default function contarOvejas(ovejas) {
  const ovejasFiltradas = ovejas.filter((oveja) => {
    const nombreLimpio = oveja.name.toLowerCase().replace(/\s/g, '');
    return oveja.color.toLowerCase() === 'rojo' && (nombreLimpio.includes('n') && nombreLimpio.includes('a'));
  });

  return ovejasFiltradas;
}