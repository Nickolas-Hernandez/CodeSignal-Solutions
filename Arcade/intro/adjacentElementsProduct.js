//Given an array of integers, find the pair of adjacent elements
//that has the largest product and return that product.

//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//adjacentElementsProduct(inputArray) = 21

function adjacentElementsProduct(inputArray) {
    var max = inputArray[0] * inputArray[1];
    for(var i = 0; i < inputArray.length; i++){
        if (inputArray[i] * inputArray[i+1] > max){
            max = inputArray[i] * inputArray[i+1];
        }
    }
    return max;
}
