/// Input array
let arr = [3, 2, 1, 3 ,3];

const birthdayCakeCandles = (candles) => {
  let maxVal = Math.max(...candles);
  let currentArr = candles.filter((val) => val == maxVal);
  return currentArr.length
};

birthdayCakeCandles(arr);
