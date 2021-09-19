export const calcularPorcentajeKeys = (keys) => {
  const totalKeys = keys.length;
  let valorPorcentaje = 0;
  keys.forEach((key) => (valorPorcentaje += key.complete));
  return Math.round((valorPorcentaje * 100) / (totalKeys * 100), 2);
};
