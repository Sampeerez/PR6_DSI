import { Arithmeticable } from "./Arithmeticable";

/**
 * La clase Rational implementa la interfaz Arithmeticable y permite realizar operaciones aritméticas con números racionales.
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Constructor de la clase Rational.
   * @param numerator - El numerador del número racional.
   * @param denominator - El denominador del número racional.
   */
  constructor(
    public numerator: number,
    public denominator: number,
  ) {}

  /**
   * Método para calcular el máximo común divisor de dos números.
   * @param first_number - El primer número.
   * @param second_number - El segundo número.
   * @returns El máximo común divisor de first_number y second_number.
   */
  private mcd(first_number: number, second_number: number): number {
    return second_number === 0
      ? first_number
      : this.mcd(second_number, first_number % second_number);
  }

  /**
   * Método para simplificar el número racional.
   */
  private simplify(): void {
    const divisor = this.mcd(
      Math.abs(this.numerator),
      Math.abs(this.denominator),
    );
    this.numerator /= divisor;
    this.denominator /= divisor;
  }

  /**
   * Método para sumar este número racional con otro.
   * @param other - El otro número racional.
   * @returns Un nuevo número racional que es la suma de este y other.
   */
  add(other: Rational): Rational {
    const result = new Rational(
      this.numerator * other.denominator +
        other.numerator * this.denominator,
      this.denominator * other.denominator,
    );
    result.simplify();
    return result;
  };

  /**
   * Método para restar otro número racional de este.
   * @param other - El otro número racional.
   * @returns Un nuevo número racional que es la diferencia entre este y other.
   */
  subtract(other: Rational): Rational {
    const result = new Rational(
      this.numerator * other.denominator -
        other.numerator * this.denominator,
      this.denominator * other.denominator,
    );
    result.simplify();
    return result;
  };

  /**
   * Método para multiplicar este número racional por otro.
   * @param other - El otro número racional.
   * @returns Un nuevo número racional que es el producto de este y other.
   */
  multiply(other: Rational): Rational {
    const result = new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator,
    );
    result.simplify();
    return result;
  };

  /**
   * Método para dividir este número racional por otro.
   * @param other - El otro número racional.
   * @returns Un nuevo número racional que es el cociente de este y other.
   */
  divide(other: Rational): Rational {
    const result = new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator,
    );
    result.simplify();
    return result;
  };
}