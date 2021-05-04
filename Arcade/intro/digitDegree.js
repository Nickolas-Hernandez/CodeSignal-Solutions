// Let's define digit degree of some positive integer as the number of times we
// need to replace this number with the sum of its digits until we get to a one
// digit number.

// Given an integer, find its digit degree.

// For n = 91, the output should be
// digitDegree(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

function digitDegree(n, count = 0) {
  if (n < 10) return count;
  const reducedN = n
    .toString()
    .split("")
    .reduce((a, b) => {
      a = parseInt(a);
      b = parseInt(b);
      return a + b;
    });
  count++;
  return digitDegree(reducedN, count);
}
