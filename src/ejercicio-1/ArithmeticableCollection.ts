import { Arithmeticable } from "./Arithmeticable";

/**
 * La clase ArithmeticableCollection representa una colección de elementos que implementan la interfaz Arithmeticable.
 * @template T - El tipo de elementos en la colección. Debe extender la interfaz Arithmeticable.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[];

  /**
   * Constructor de la clase ArithmeticableCollection.
   * Inicializa la colección como un array vacío.
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Método para agregar un elemento a la colección.
   * @param element - El elemento que se agregará a la colección.
   */
  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  /**
   * Método para obtener un elemento de la colección por su índice.
   * @param index - El índice del elemento que se desea obtener.
   * @returns El elemento en el índice especificado, o undefined si no hay ningún elemento en ese índice.
   */
  getArithmeticable(index: number): T | undefined {
    return this.elements[index] || undefined;
  }

  /**
   * Método para obtener el número de elementos en la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}