// Write a function that reverses characters in (possibly nested)
// parentheses in the input string.

// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";

function reverseInParentheses(inputString) {
    if(inputString.includes('(')){
        return reverseInParentheses(reverseWord(inputString))
    }
    return inputString;
}

function reverseWord(string){
    var regexp = /\(([^()]*)\)/i
    var subString = regexp.exec(string)[1];
    subString = subString.split('').reverse().join('');
    return string.replace(regexp, subString);
}
