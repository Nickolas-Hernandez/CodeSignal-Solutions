// Given two strings, find the number of common characters between them.

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

function commonCharacterCount(s1, s2) {
    var s1Character = s1.split('');
    var s2Character = s2.split('');
    var commonCharacters = [];
    for(var i = 0; i < s1Character.length; i++){
        if(s2Character.includes(s1Character[i])){
            var index = s2Character.indexOf(s1Character[i]);
            var character = s2Character.splice(index, 1);
            commonCharacters.push(character[0]);
        }
    }
    return commonCharacters.length;
}
