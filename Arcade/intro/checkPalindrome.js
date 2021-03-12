// Given a string, check if it is a palindrome.

//For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;

function checkPalindrome(inputString) {
    var reversedString = '';
    for(var i = inputString.length - 1; i >=0 ; i--){
        reversedString += inputString[i];
    }
    if(reversedString === inputString){
        return true;
    }else {
        return false;
    }
}
