// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first
// half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    var toString = '' + n;
    var numbersArray = [];
    var firstHalf = 0;
    var secondHalf = 0;
    for(var i = 0; i < toString.length; i++){
        numbersArray.push(parseInt(toString[i]));
    }
    for(var j = 0; j < numbersArray.length; j++){
        if(j < (numbersArray.length / 2)){
            firstHalf += numbersArray[j];
        }else secondHalf += numbersArray[j];
    }
    if(firstHalf === secondHalf){
        return true;
    } else return false;
}
