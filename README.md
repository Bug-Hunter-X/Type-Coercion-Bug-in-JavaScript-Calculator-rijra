# JavaScript Calculator with Type Coercion Bug

This repository demonstrates a common type coercion bug in JavaScript and its solution.

## Bug Description
The `calculate` function performs addition or subtraction based on the `operation` parameter.  However, it doesn't explicitly check the type of inputs `a` and `b`. If these inputs are not numbers (e.g., strings), JavaScript's type coercion can lead to unexpected results.

## Bug Solution
The solution involves adding explicit type checking to ensure that `a` and `b` are numbers before performing the calculations. If they are not, it handles the error appropriately.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Open `bugSolution.js` to see the fixed code.
4. Run the JavaScript files in your preferred JavaScript environment (e.g., Node.js, browser console).