import { Arithmeticable } from "./Arithmeticable";

/**
 * La clase Complex implementa la interfaz Arithmeticable y permite realizar operaciones aritméticas con números complejos.
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor de la clase Complex.
   * @param real - La parte real del número complejo.
   * @param imaginary - La parte imaginaria del número complejo.
   */
  constructor(
    public real: number,
    public imaginary: number,
  ) {}

  /**
   * Método para sumar este número complejo con otro.
   * @param other - El otro número complejo.
   * @returns Un nuevo número complejo que es la suma de este y other.
   */
  add(other: Complex): Complex {
    return new Complex(
      this.real + other.real,
      this.imaginary + other.imaginary,
    );
  }

  /**
   * Método para restar otro número complejo de este.
   * @param other - El otro número complejo.
   * @returns Un nuevo número complejo que es la diferencia entre este y other.
   */
  subtract(other: Complex): Complex {
    return new Complex(
      this.real - other.real,
      this.imaginary - other.imaginary,
    );
  }

  /**
   * Método para multiplicar este número complejo por otro.
   * @param other - El otro número complejo.
   * @returns Un nuevo número complejo que es el producto de este y other.
   */
  multiply(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real,
    );
  }

  /**
   * Método para dividir este número complejo por otro.
   * @param other - El otro número complejo.
   * @returns Un nuevo número complejo que es el cociente de este y other.
   */
  divide(other: Complex): Complex {
    const denominator =
      other.real * other.real +
      other.imaginary * other.imaginary;
    return new Complex(
      (this.real * other.real + this.imaginary * other.imaginary) / denominator,
      (this.imaginary * other.real - this.real * other.imaginary) / denominator,
    );
  };
}