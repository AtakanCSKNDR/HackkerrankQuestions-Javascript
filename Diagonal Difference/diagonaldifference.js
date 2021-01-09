/// INPUT MATRIX
let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const diagonalDifference = (arr) => {
  let index = 0 ,left = 0 ,rigth = 0;
  arr.forEach((element) => {
    rigth += element[element.length - 1 - index];
    left += element[index];
    index++;
  });
  let result = left - rigth;
  return Math.abs(result);
};

console.log(diagonalDifference(arr));
