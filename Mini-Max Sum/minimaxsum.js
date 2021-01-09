/// TEST CASES
var array = [1, 2, 3, 4, 5];
// var array = [5, 5, 5, 5, 5];
// var array = [19, 1, 42, 33, 51];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const miniMaxSum = (arr) => {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  if (maxValue == minValue) {
    console.log(arr.reduce(reducer) - maxValue, arr.reduce(reducer) - maxValue);
  } else {
    console.log(arr.reduce(reducer) - maxValue, arr.reduce(reducer) - minValue);
  }
};

miniMaxSum(array);
