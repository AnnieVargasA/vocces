// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

const numbersTop = (arr) => {
  const counts = arr.reduce((map, val) => {
    map.set(val, (map.get(val) || 0) + 1);
    return map;
  }, new Map());
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((tuple) => tuple[0]);
};

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(["a", 3, 2, "a", 2, 3, "a", 3, 4, "a", "a", 1, "a", 2, "a", 3]); // [ 'a', 3, 2 ]
