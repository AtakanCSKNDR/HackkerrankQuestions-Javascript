/// Input
let n = 10;
const staircase = (n) => {
  for (let index = 1; index <= n; index++) {
    console.log(" ".repeat(n - index) + "#".repeat(index));
  }
};
staircase(n);
