// Ejercicio 3
// Dada una matriz en la que cada elemento númerico representa una medida,
// crea una función increasedMeasurements que retorne el número de días en los que ha existido un incremento respecto del día anterior.
// Ejemplo: en el caso de [1, 5, 3, 5] existen 2 incremetos ( el día 2 respecto al dia 1 y el dia 4 respecto al día 3 )

const increasedMeasurements = (measurements) => {
  let increments = 0;
  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
      increments++;
    }
  }
  return increments;
};

/**
 * TEST Ejercicio 1
 */
const measurements = [
  245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222,
  221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234,
];
increasedMeasurements(measurements); // 19
