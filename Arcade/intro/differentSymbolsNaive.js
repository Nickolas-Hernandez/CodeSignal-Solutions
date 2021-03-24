// Given a string, find the number of different characters in it.

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

function differentSymbolsNaive(s) {
    const differentChars = [];
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(differentChars.includes(s[i])){
            continue;
        }else differentChars.push(s[i]);
    }
    return differentChars.length;
}
