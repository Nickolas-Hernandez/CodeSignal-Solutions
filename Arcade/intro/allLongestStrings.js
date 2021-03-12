// Given an array of strings, return another array containing all of its longest strings.

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"]

function allLongestStrings(inputArray) {
    var longest = 0;
    var longestStringsArray = [];
    for(var i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > longest){
            longest = inputArray[i].length;
        }
    }
    for(var j = 0; j < inputArray.length; j++){
        if(inputArray[j].length === longest){
            longestStringsArray.push(inputArray[j]);
        }
    }
    return longestStringsArray;
}
