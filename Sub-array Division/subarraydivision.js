/// TEST INPUTS
let s = [1, 2, 1, 3, 2];
let d = 3;
let m = 2;

const birthday = (s, d, m) => {
  let count = 0;
  for (let index = 0; index <= s.length - m; index++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += s[index + j];
    }
    if (sum == d) {
      count++;
    }
  }
  return count;
};

console.log(birthday(s, d, m));
