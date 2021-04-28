// Given array of integers, find the maximal possible sum of some of its
// k consecutive elements.

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.

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
