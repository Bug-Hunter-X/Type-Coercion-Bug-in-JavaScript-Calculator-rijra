function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  if (operation === 'add') {
    return add(a, b);
  } else if (operation === 'subtract') {
    return subtract(a, b);
  } else {
    return 'Invalid operation';
  }
}

console.log(calculate(5, 3, 'add')); // Output: 8
console.log(calculate(5, 3, 'subtract')); // Output: 2
console.log(calculate(5, 3, 'multiply')); // Output: Invalid operation
console.log(calculate('5', 3, 'add')); // Output: Error: Inputs must be numbers
console.log(calculate(5, '3', 'subtract')); // Output: Error: Inputs must be numbers