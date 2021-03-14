// An IP address is a numerical label assigned to each device
// (e.g., computer, printer) participating in a computer network
// that uses the Internet Protocol for communication. There are
// two versions of the Internet protocol, and thus two versions
// of addresses. One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

function isIPv4Address(inputString) {
    const inputToArray = inputString.split('.');
    let regexp = /[a-z]/g
    if(inputToArray.length !== 4) return false;
    for(let i = 0; i < inputToArray.length; i++){
        if (regexp.exec(inputToArray[i])) return false;
        if(parseInt(inputToArray[i]) > 255) return false;
        if(!parseInt(inputToArray[i]) && inputToArray[i] !== '0') return false;
        if(inputToArray[i] === '01') return false;
    }
    return true;
}
