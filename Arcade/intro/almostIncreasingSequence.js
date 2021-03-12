// Given a sequence of integers as an array, determine whether it is
// possible to obtain a strictly increasing sequence by removing no
// more than one element from the array.

// Note: sequence [a0, a1, ..., an] is considered to be a strictly
// increasing if [a0 < a1 < ... < an]. Sequence containing only one
// element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
    if(sequence.length === 1) return true;
    var firstTry = isIncreasingSequence(sequence);
    if(firstTry === -1) return true;
    for(var i = firstTry; i < sequence.length; i++){
        var temp = [...sequence];
        temp.splice(i,1);
        if(isIncreasingSequence(temp) === -1) return true;
    }
    return false;
}

function isIncreasingSequence(sequence){
    for(var i = 0; i < sequence.length-1; i++){
        if(sequence[i+1] - sequence[i]<=0){
            return i;
        }
    }
    return -1;
}
