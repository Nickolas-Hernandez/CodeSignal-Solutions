// Call two arms equally strong if the heaviest weights they
// each are able to lift are equal.

// Call two people equally strong if their strongest arms are
// equally strong (the strongest arm can be both the right and
//   the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find
// out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourStrongest, yourWeakest, friendsStrongest, friendsWeakest;
    if(yourLeft > yourRight){
        yourStrongest = yourLeft;
        yourWeakest = yourRight;
    }else{
        yourStrongest = yourRight;
        yourWeakest = yourLeft;
    }
    if(friendsLeft > friendsRight){
        friendsStrongest = friendsLeft;
        friendsWeakest = friendsRight;
    }else{
        friendsStrongest = friendsRight;
        friendsWeakest = friendsLeft;
    }
    return (yourStrongest === friendsStrongest && yourWeakest === friendsWeakest);
}
