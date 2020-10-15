const START_VALUE = 2; // Has to be lower than a certain value. Read below.
const FORMULA_RECURSIONS = 100000;

let pi = START_VALUE;
while (true) {
  let recursivePi = pi;
  for (let r = 0; r < FORMULA_RECURSIONS; r++) {
    recursivePi = Math.pow(1 + 1 / recursivePi, 1 + pi);
  }
  pi = recursivePi;
  console.log(pi);
}

// Results: Approximates 3.141041401012979
// Start values above this will result in Infinity.

// The other one basically just takes longer.