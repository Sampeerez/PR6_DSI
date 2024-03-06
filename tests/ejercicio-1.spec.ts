import "mocha";
import { expect } from "chai";
import { Complex } from "../src/ejercicio-1/Complex";
import { Rational } from "../src/ejercicio-1/Rational";
import { Adapter } from "../src/ejercicio-1/Adapter";

describe("Ejercicio-1", () => {
  describe("Rational tests", () => {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);

    it("should add two rational numbers: 1/2 + 3/4 = 5/4", () => {
      const result = rational1.add(rational2);
      expect(result.numerator).to.equal(5);
      expect(result.denominator).to.equal(4);
    });

    it("should subtract two rational numbers: 1/2 - 3/4 = -1/4", () => {
      const result = rational1.subtract(rational2);
      expect(result.numerator).to.equal(-1);
      expect(result.denominator).to.equal(4);
    });

    it("should multiply two rational numbers: 1/2 x 3/4 = 3/8", () => {
      const result = rational1.multiply(rational2);
      expect(result.numerator).to.equal(3);
      expect(result.denominator).to.equal(8);
    });

    it("should divide two rational numbers: 1/2 / 3/4 = 2/3", () => {
      const result = rational1.divide(rational2);
      expect(result.numerator).to.equal(2);
      expect(result.denominator).to.equal(3);
    });
  });

  describe("Complex tests", () => {
    const complex1 = new Complex(1, 2);
    const complex2 = new Complex(3, 4);

    it("should add two complex numbers: (1 + 2i) + (3 + 4i) = 4 + 6i", () => {
      const result = complex1.add(complex2);
      expect(result.real).to.equal(4);
      expect(result.imaginary).to.equal(6);
    });

    it("should subtract two complex numbers: (1 + 2i) - (3 + 4i) = -2 - 2i", () => {
      const result = complex1.subtract(complex2);
      expect(result.real).to.equal(-2);
      expect(result.imaginary).to.equal(-2);
    });

    it("should multiply two complex numbers: (1 + 2i) x (3 + 4i) = -5 + 10i", () => {
      const result = complex1.multiply(complex2);
      expect(result.real).to.equal(-5);
      expect(result.imaginary).to.equal(10);
    });

    it("should divide two complex numbers: (1 + 2i) / (3 + 4i) = 0.44 + 0.08i", () => {
      const result = complex1.divide(complex2);
      expect(result.real).to.be.closeTo(0.44, 0.01);
      expect(result.imaginary).to.be.closeTo(0.08, 0.01);
    });
  });

  describe("Adapter tests", () => {
    const rational = new Rational(1, 2);
    const complex = new Complex(3, 4);
    const adapter = new Adapter(rational);

    it("should add a rational and a complex number: 1/2 + (3 + 4i) = 3.5 + 4i", () => {
      const result = adapter.add(complex);
      expect(result.real).to.equal(3.5);
      expect(result.imaginary).to.equal(4);
    });

    it("should subtract a rational and a complex number: 1/2 - (3 + 4i) = -2.5 - 4i", () => {
      const result = adapter.subtract(complex);
      expect(result.real).to.equal(-2.5);
      expect(result.imaginary).to.equal(-4);
    });

    it("should multiply a rational and a complex number: 1/2 x (3 + 4i) = 1.5 + 2i", () => {
      const result = adapter.multiply(complex);
      expect(result.real).to.equal(1.5);
      expect(result.imaginary).to.equal(2);
    });

    it("should divide a rational and a complex number: 1/2 / (3 + 4i) = 0.06 - 0.08i", () => {
      const result = adapter.divide(complex);
      expect(result.real).to.be.closeTo(0.06, 0.01);
      expect(result.imaginary).to.be.closeTo(-0.08, 0.01);
    });

    it("should add a complex and a rational number: (3 + 4i) + 1/2 = 3.5 + 4i", () => {
      const result = complex.add(adapter);
      expect(result.real).to.equal(3.5);
      expect(result.imaginary).to.equal(4);
    });

    it("should subtract a complex and a rational number: (3 + 4i) - 1/2 = 2.5 + 4i", () => {
      const result = complex.subtract(adapter);
      expect(result.real).to.equal(2.5);
      expect(result.imaginary).to.equal(4);
    });

    it("should multiply a complex and a rational number: (3 + 4i) x 1/2 = 1.5 + 2i", () => {
      const result = complex.multiply(adapter);
      expect(result.real).to.equal(1.5);
      expect(result.imaginary).to.equal(2);
    });

    it("should divide a complex and a rational number: (3 + 4i) / 1/2 = 6 + 8i", () => {
      const result = complex.divide(adapter);
      expect(result.real).to.equal(6);
      expect(result.imaginary).to.equal(8);
    });
  });
});