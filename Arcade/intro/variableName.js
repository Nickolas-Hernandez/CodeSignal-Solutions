// Correct variable names consist only of English letters, digits
// and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// For name = "var_1__Int", the output should be
// variableName(name) = true;

// For name = "qq-q", the output should be
// variableName(name) = false;

function variableName(name) {
    const regExp = /[^a-zA-Z0-9_]/g;
    const regExpNumOnly = /[0-9]/g;
    if(regExpNumOnly.exec(name[0])) return false;
    if(regExp.exec(name)) return false;
    return true;
}
