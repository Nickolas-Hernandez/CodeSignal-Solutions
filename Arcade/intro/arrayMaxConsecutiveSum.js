function arrayMaxConsecutiveSum(inputArray, k) {
  let currentMax = 0;
  let totalMax = 0;
  for (let i = 0; i < k; i++) {
    currentMax += inputArray[i];
  }
  totalMax = currentMax;
  for (let j = k; j < inputArray.length; j++) {
    currentMax += (inputArray[j] - inputArray[j - k]);
    totalMax = Math.max(currentMax, totalMax);
  }
  return totalMax;
}
