// Find the leftmost digit that occurs in a given string.

// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';

function firstDigit(inputString) {
    for(let i = 0; i < inputString.length; i++){
        const currentCharCode = inputString.charCodeAt(i);
        if(currentCharCode >= 48 && currentCharCode <= 57){
            return inputString[i];
        }
    }
}
