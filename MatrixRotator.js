/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

}

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  var matrixHeight = this.matrix.length;
  var tempMatrix = [];

  for(var i = 0; i < matrixHeight; i++) {
    var tempRow = [];
    for(var j = 0; j < matrixHeight; j++) {
      tempRow.push(0);
    }
    tempMatrix.push(tempRow);
  }

  var len = this.matrix.length - 1;
  var x, y;
  // must be a valid Direction, see Direction.js
  if(direction === Direction.CCW) {
    //rotate counterclockwise
    for(x = (matrixHeight - 1); x >= 0; x--) {
      len = (this.matrix.length - 1) - x;
      for(y = (matrixHeight - 1); y >= 0; y--) {
        tempMatrix[len][y] = this.matrix[y][x];
      }
    }
    this.matrix = tempMatrix;
    return this.matrix;
  } else if(direction === Direction.CW) { //this is rotating CCW instead of CW. fix
    //rotate clockwise
    for(y = (matrixHeight - 1); y >= 0; y--) {
      len = (matrixHeight - 1) - y;
      for(x = 0; x < (matrixHeight); x++) {
        tempMatrix[x][len] = this.matrix[y][x];
      }
    }
    this.matrix = tempMatrix;
    return this.matrix;
  }


};