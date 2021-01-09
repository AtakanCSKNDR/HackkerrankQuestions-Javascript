/// Test Input
let input = [2081, 8403, 9107, 8400];

const kangaroo = (x1, v1, x2, v2) => {
  for (let index = 0; index < 10000; index++) {
    if (x1 + v1 * index == x2 + v2 * index) {
      return "YES";
    }
  }
  return "NO";
};

console.log(kangaroo(input[0], input[1], input[2], input[3]));
