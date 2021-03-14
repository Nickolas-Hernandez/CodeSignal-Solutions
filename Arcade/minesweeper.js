// In the popular Minesweeper game you have a board with some mines
// and those cells that don't contain a mine have a number in it that
// indicates the total number of mines in the neighboring cells.
// Starting off with some arrangement of mines we want to create a
// Minesweeper game setup.

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]

// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

function minesweeper(matrix) {
    const numberMatrix = createNumberMatrix(matrix);
    for(let i = 0; i < matrix.length; i++){
        for(let j =0; j < matrix[i].length; j++){
            if(matrix[i][j]){
                if(matrix[i][j+1] !== undefined) numberMatrix[i][j+1]++;
                if(matrix[i][j-1] !== undefined) numberMatrix[i][j-1]++;
                if(matrix[i+1]){
                   if(matrix[i+1][j] !== undefined) numberMatrix[i+1][j]++;
                    if(matrix[i+1][j+1] !== undefined) numberMatrix[i+1][j+1]++;
                    if(matrix[i+1][j-1] !== undefined) numberMatrix[i+1][j-1]++;
                }
                if(matrix[i-1]){
                    if(matrix[i-1][j] !== undefined) numberMatrix[i-1][j]++;
                    if(matrix[i-1][j+1] !== undefined) numberMatrix[i-1][j+1]++;
                    if(matrix[i-1][j-1] !== undefined) numberMatrix[i-1][j-1]++;
                }
            }
        }
    }
    return numberMatrix;
}

function createNumberMatrix(matrix){
   const numberMatrix = [];
   const numberOfRows = matrix.length;
   const numberOfcolumns = matrix[0].length;
   for(let i = 0; i < matrix.length; i++){
       const row = [];
       for(let j = 0; j < matrix[i].length; j++){
           row.push(0);
       }
       numberMatrix.push(row);
   }
   return numberMatrix;
}
