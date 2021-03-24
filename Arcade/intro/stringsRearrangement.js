// Given an array of equal-length strings, you'd like to know if
// it's possible to rearrange the order of the elements in such
// a way that each consecutive pair of strings differ by exactly
// one character. Return true if it's possible, and false if not.

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

function stringsRearrangement(inputArray) {
  for(let i = 0; i < inputArray.length; i++){
      let leftOvers = compareNext(inputArray[i], inputArray);
      if(leftOvers.length === 0) return true;
  }
  return false;
}

function compareNext(string, arr){
    for(let i = 0; i < arr.length; i++){
        if(differsByOne(string, arr[i])){
            let leftOvers = compareNext(arr[i], arr.slice(0, i).concat(arr.slice(i+1)));
            if (leftOvers.length === 0) return leftOvers;
        }
    }
    return arr;
}



function differsByOne(string1, string2){
    let difference = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) difference++;
        if (difference > 1) break;
    }
    return difference === 1;
}
