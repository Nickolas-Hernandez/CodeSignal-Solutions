// Given the positions of a white bishop and a black pawn on the standard chess
// board, determine whether the bishop can capture the pawn in one move.

// For bishop = "a1" and pawn = "c3", the output should be
// bishopAndPawn(bishop, pawn) = true.

function bishopAndPawn(bishop, pawn) {
  const columnDiff = bishop.charCodeAt(0) - pawn.charCodeAt(0);
  const rowDiff = parseInt(bishop[1]) - parseInt(pawn[1]);
  return Math.abs(columnDiff) === Math.abs(rowDiff);
}
