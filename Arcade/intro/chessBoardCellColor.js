// Given two cells on the standard chess board, determine whether they
// have the same color or not.

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

function chessBoardCellColor(cell1, cell2) {
     const cell1Color = getCellColor(cell1);
     const cell2Color = getCellColor(cell2);
     return cell1Color === cell2Color;
}

function getCellColor(cell){
    const regexA = /[ACEG]/g;
    const num = parseInt(cell[1]);
    let color;
    if(regexA.exec(cell)){
        if(num % 2 === 1){
            color = 'dark';
        }else color = 'light';
    }else{
       if(num % 2 === 0){
            color = 'dark';
        }else color = 'light';
    }
    return color;
}
