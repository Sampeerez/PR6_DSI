import { Complex } from './Complex';
import { Rational } from './Rational';

/**
 * La clase Adapter extiende la clase Complex y permite realizar operaciones aritméticas con números racionales y complejos.
 */
export class Adapter extends Complex {
  /**
   * Constructor de la clase Adapter.
   * @param rational - El número racional que se convertirá en un número complejo.
   */
  constructor(rational: Rational) {
    super(rational.numerator / rational.denominator, 0);
  }
}