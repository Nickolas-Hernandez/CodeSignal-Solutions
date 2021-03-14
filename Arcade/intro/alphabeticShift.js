// Given a string, your task is to replace each of its characters by
// the next one in the English alphabet; i.e. replace a with b, replace
// b with c, etc (z would be replaced by a).

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    inputString = inputString.split('');
    for(let i = 0; i < inputString.length; i++){
        let charNumber = inputString[i].charCodeAt();
        if(charNumber === 122){
            inputString[i] = 'a';
        }else {
            inputString[i] = String.fromCharCode(charNumber + 1);
        }
    }
    inputString = inputString.join('');
    return inputString;
}
