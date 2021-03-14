// Check if all digits of the given integer are even.

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;

function evenDigitsOnly(n) {
    const digitsArray = n.toString().split('');
    for(let i = 0; i < digitsArray.length; i++){
        digitsArray[i] = parseInt(digitsArray[i]);
        if(digitsArray[i] % 2 !== 0){
            return false;
        }
    }
    return true;
}
