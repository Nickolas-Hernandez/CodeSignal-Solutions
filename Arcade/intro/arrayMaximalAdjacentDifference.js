// Given an array of integers, find the maximal absolute difference between
// any two of its adjacent elements.

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    const differences = [];
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i+1]){
         differences.push(Math.abs(inputArray[i] - inputArray[i+1]));
        }
    }
    return Math.max(...differences);
}
