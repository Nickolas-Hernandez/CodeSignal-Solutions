// Given a sorted array of integers a, your task is to determine
// which element of a is closest to all other values of a.

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

function absoluteValuesSumMinimization(a) {
    const index = Math.floor((a.length - 1) / 2);
    return a[index];
}
