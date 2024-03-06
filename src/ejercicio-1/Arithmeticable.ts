/**
 * La interfaz Arithmeticable define un conjunto de operaciones aritméticas que pueden ser realizadas en un objeto.
 * @template T - El tipo de objeto en el que se pueden realizar las operaciones aritméticas.
 */
export interface Arithmeticable<T> {
  /**
   * Método para sumar este objeto con otro.
   * @param number - El otro objeto.
   * @returns Un nuevo objeto que es la suma de este y number.
   */
  add: (number: T) => T;

  /**
   * Método para restar otro objeto de este.
   * @param number - El otro objeto.
   * @returns Un nuevo objeto que es la diferencia entre este y number.
   */
  subtract: (number: T) => T;

  /**
   * Método para multiplicar este objeto por otro.
   * @param number - El otro objeto.
   * @returns Un nuevo objeto que es el producto de este y number.
   */
  multiply: (number: T) => T;

  /**
   * Método para dividir este objeto por otro.
   * @param number - El otro objeto.
   * @returns Un nuevo objeto que es el cociente de este y number.
   */
  divide: (number: T) => T;
}