// Given array of integers, remove each kth element from it.

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3,
// the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
    let kth = k-1;
    return inputArray.filter((value, index) => {
        if(index === kth){
        kth += k;
    } else {
        return true;
    }
    });
}
