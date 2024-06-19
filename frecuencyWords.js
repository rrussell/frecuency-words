/**
Análisis de Palabras Frecuentes
======== == ======== ==========

Escribe una función que tome como entrada un texto (string) y devuelva
las 10 palabras más frecuentes en el texto, junto con su frecuencia de
aparición. El texto puede contener puntuación y caracteres en mayúsculas
y minúsculas.

Requisitos:
  - La función debe ignorar las diferencias entre mayúsculas y minúsculas
    (es decir, "La" y "la" deben contarse como la misma palabra).
  - La puntuación debe ser ignorada (por ejemplo, "palabra," y "palabra"
    deben contarse como la misma palabra).
  - El resultado debe ser una lista de tuplas, donde cada tupla contiene
    una palabra y su frecuencia, ordenadas de mayor a menor frecuencia.
  - Debes utilizar funciones auxiliares para dividir la lógica en partes
    reutilizables.
  - El código debe ser claro, bien comentado y seguir buenas prácticas
    de programación.
 */

/**
 * Función principal que toma un texto como entrada y devuelve las 10 palabras más frecuentes.
 * 
 * @param {string} text - El texto a analizar.
 * @returns {Array} - Lista de tuplas con las palabras más frecuentes y su frecuencia.
 */
const getFrequencyWords = (text) => {
  
};

const t = "Hola, esto es una prueba. Esto es sólo una prueba.";

// [{'es': 2}, {'esto': 2}, {'prueba': 2}, {'una': 2}, {'hola': 1}, {'sólo': 1}]
console.log(getFrequencyWords(t));
