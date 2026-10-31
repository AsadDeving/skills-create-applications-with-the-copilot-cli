const { calculate } = require('../calculator');

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

  test('rejects unsupported operators', () => {
    expect(() => calculate(2, '%', 3)).toThrow('Unsupported operator "%".');
  });
});
