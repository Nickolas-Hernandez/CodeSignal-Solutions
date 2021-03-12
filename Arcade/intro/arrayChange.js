// You are given an array of integers. On each move you
// are allowed to increase exactly one of its element by
// one. Find the minimal number of moves required to
// obtain a strictly increasing sequence from the input.

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

function arrayChange(inputArray) {
    let increment = 0;
    let differnce = 0;
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] >= inputArray[i + 1]){
            difference = inputArray[i] - inputArray[i+1];
            increment += difference + 1;
            inputArray[i + 1] += difference + 1;
        }
    }
    return increment;
}
