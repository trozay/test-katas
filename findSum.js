const findSum = (arr, num) => {
  if (arr.length === 0 || !arr) return false;
  if (!num) return false;
  let smallNum = 0;
  let largeNum = arr.length - 1;
  while (smallNum !== largeNum) {
    const sumOfTwoNums = arr[smallNum] + arr[largeNum];
    if (sumOfTwoNums === num) return true;
    sumOfTwoNums > num ? largeNum-- : smallNum++;
  }
  return false;
};

module.exports = findSum;