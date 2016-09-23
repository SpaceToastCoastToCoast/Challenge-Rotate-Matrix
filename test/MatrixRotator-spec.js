var chai = require('chai');
chai.should();
var MatrixRotator = require("../MatrixRotator").MatrixRotator;
var Matrix = require("../Matrix");
var Direction = require("../Direction").Direction;

describe("The Matrix Rotator", function () {

  /* Matrix we start with
  [
    [8,0,1,9,3],
    [4,5,2,9,7],
    [3,3,6,9,0],
    [0,6,8,8,3],
    [9,0,3,8,7],
  ];
  */

  var matrixRotator = new MatrixRotator(Matrix.getMatrix1());

  it("can rotate Clockwise", function () {
    matrixRotator.rotate(Direction.CW);
    matrixRotator.matrix.should.be.deep.equal( [
                                            [9,0,3,4,8],
                                            [0,6,3,5,0],
                                            [3,8,6,2,1],
                                            [8,8,9,9,9],
                                            [7,3,0,7,3]
                                          ]);

  });

  it("can rotate CounterClockwise", function () {
    matrixRotator.rotate(Direction.CCW);
    matrixRotator.rotate(Direction.CCW);
    matrixRotator.matrix.should.be.deep.equal([
                                            [3,7,0,3,7],
                                            [9,9,9,8,8],
                                            [1,2,6,8,3],
                                            [0,5,3,6,0],
                                            [8,4,3,0,9]
                                          ]);
  });

});