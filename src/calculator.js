#!/usr/bin/env node

/**
 * Node.js CLI calculator.
 *
 * Supported operations:
 *   + Addition
 *   - Subtraction
 *   * Multiplication
 *   / Division
 *   % Modulo
 *   ^ Exponentiation
 *   sqrt Square root
 *
 * Usage:
 *   node src/calculator.js <number> <operator> <number>
 *   node src/calculator.js 8 + 4
 */

// Returns the remainder of a divided by b.
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot calculate modulo by zero.');
  }

  return a % b;
}

// Returns base raised to the exponent.
function power(base, exponent) {
  return base ** exponent;
}

// Returns the square root of n and rejects negative numbers.
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate the square root of a negative number.');
  }

  return Math.sqrt(n);
}

const operations = {
  // Addition
  '+': (left, right) => left + right,
  // Subtraction
  '-': (left, right) => left - right,
  // Multiplication
  '*': (left, right) => left * right,
  // Division
  '/': (left, right) => {
    if (right === 0) {
      throw new Error('Cannot divide by zero.');
    }

    return left / right;
  },
  // Modulo
  '%': modulo,
  // Exponentiation
  '^': power,
};

function calculate(left, operator, right) {
  const operation = operations[operator];

  if (!operation) {
    throw new Error(`Unsupported operator "${operator}". Use +, -, *, or /.`);
  }

  return operation(left, right);
}

function parseNumber(value, name) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    throw new Error(`${name} must be a valid number.`);
  }

  return number;
}

function main(args) {
  if (args.length !== 3) {
    throw new Error(
      'Usage: node src/calculator.js <number> <operator> <number>',
    );
  }

  const left = parseNumber(args[0], 'The first operand');
  const result = calculate(left, args[1], parseNumber(args[2], 'The second operand'));

  console.log(result);
}

if (require.main === module) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { calculate, modulo, power, squareRoot };
