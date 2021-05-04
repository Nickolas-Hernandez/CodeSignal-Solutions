// Given a string, output its longest prefix which contains only digits.

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
  let prefix = "";
  for (let i = 0; i < inputString.length; i++) {
    if (
      Number.parseInt(inputString[i]) ||
      Number.parseInt(inputString[i]) === 0
      ) {
      prefix += inputString[i];
    } else {
      break;
    }
  }
  return prefix;
}
