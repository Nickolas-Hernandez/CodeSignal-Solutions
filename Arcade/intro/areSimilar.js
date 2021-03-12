// Two arrays are called similar if one can be obtained from another
// by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

function areSimilar(a, b){
    const fromA = [];
    const fromB = [];
    let difference = 0;
    for(let i = 0; i < a.length; i++){
        if(difference > 2) break;
        if(a[i] !== b[i]){
            fromA.push(a[i]);
            fromB.push(b[i]);
            difference++;
        }
    }
    if(fromA[0] !== fromB[1]) return false;
    if(fromB[0] !== fromA[1]) return false;
    return difference < 3
}
