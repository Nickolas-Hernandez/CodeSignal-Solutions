// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    for(var i = 0; i < picture.length; i++){
        picture[i] = '*' + picture[i] + '*';
    }
    var atricString = '';
    while(atricString.length < picture[0].length){
        atricString += '*'
    }
    picture.push(atricString);
    picture.unshift(atricString);
    return picture;
}
