// A string is said to be beautiful if each letter in the string appears at most as many times as the previous 
// letter in the alphabet within the string; ie: b occurs no more times than a; 
// c occurs no more times than b; etc. Note that letter a has no previous letter.

// Given a string, check whether it is beautiful.

// For inputString = "bbbaacdafe", the output should be 
// isBeautifulString(inputString) = true.

function isBeautifulString(inputString) {
    const length = inputString.length;
    const a = 97;
    const z= 122;
    for (let i = a; i < z; i++) {
      let count = 0;
      for (let j = 0; j < length; j++) {
        if (inputString[j].charCodeAt() === i) {
          count++;
        }
        if (inputString[j].charCodeAt() === i + 1) {
          count--;
        }
      }
      if (count < 0) {
        return  false ;
      }
    }
    return true;
  }