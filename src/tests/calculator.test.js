const {
  calculate,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('calculator operations', () => {
  describe('addition', () => {
    test('adds the example values from the calculator image', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('handles negative and decimal values', () => {
      expect(calculate(-2.5, '+', 3.75)).toBeCloseTo(1.25);
    });
  });

  describe('subtraction', () => {
    test('subtracts the example values from the calculator image', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('handles a negative result', () => {
      expect(calculate(4, '-', 10)).toBe(-6);
    });
  });

  describe('multiplication', () => {
    test('multiplies the example values from the calculator image', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('handles decimal values', () => {
      expect(calculate(2.5, '*', 4)).toBe(10);
    });
  });

  describe('division', () => {
    test('divides the example values from the calculator image', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('returns a decimal result when the division is not even', () => {
      expect(calculate(5, '/', 2)).toBe(2.5);
    });

    test('rejects division by zero', () => {
      expect(() => calculate(20, '/', 0)).toThrow('Cannot divide by zero.');
    });
  });

  describe('modulo', () => {
    test('matches the extended calculator example: 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
      expect(calculate(5, '%', 2)).toBe(1);
    });

    test('returns the remainder of two numbers', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('supports negative dividends', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('rejects a zero divisor', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo by zero.');
    });
  });

  describe('power', () => {
    test('matches the extended calculator example: 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('supports negative and fractional exponents', () => {
      expect(power(4, -1)).toBe(0.25);
      expect(power(9, 0.5)).toBe(3);
    });
  });

  describe('square root', () => {
    test('matches the extended calculator example: square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('returns the square root of a number', () => {
      expect(squareRoot(81)).toBe(9);
    });

    test('returns zero for zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('rejects negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow(
        'Cannot calculate the square root of a negative number.',
      );
    });
  });

  test('rejects unsupported operators', () => {
    expect(() => calculate(2, '&', 3)).toThrow('Unsupported operator "&".');
  });
});
