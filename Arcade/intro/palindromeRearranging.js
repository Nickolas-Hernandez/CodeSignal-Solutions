// Given a string, find out if its characters can be rearranged to form a palindrome.

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

function palindromeRearranging(inputString) {
    let counter = 0;
    let inputToArray = inputString.split('').sort();
    for(var i = 0; i < inputToArray.length; i ++){
        if(inputToArray[i] !== inputToArray[i+1]) counter++;
        else i++;
    }
    return counter <= 1
}
