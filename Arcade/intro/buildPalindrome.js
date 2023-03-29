// Given a string, find the shortest possible string which can be achieved by adding
// characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

function solution(st) {
    if(st.length === 0) return st;
    let i = 0;
    let diff;
    while(st !== st.split('').reverse().join('')) {
        diff = st.split('');
        diff.splice(st.length - i, 0, st[i]);
        st = diff.join('');
        i++;
    }
    return st;
}
