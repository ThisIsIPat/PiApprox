const START_VALUE = 2; // PROBABLY has to be lower than Pi

let pi = START_VALUE;
while (true) {
  pi = Math.pow(1 + 1 / Math.pow(1 + 1 / pi, 1 + pi), 1 + pi);
  console.log(pi);
}