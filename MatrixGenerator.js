function matrixGenerator(rows, columns) {
  //generate a multidimensional array populated by random values btwn 1 and 100 inclusive
  //sort the values by numeric value with Array.sort()
  var matrix = new Array(rows).fill([]);
  var randomValues = new Array(rows * columns).fill(0);

  randomValues = randomValues.map(function(element) {
    return element + Math.floor((Math.random() * 100) + 1);
  });
  randomValues.sort(function(a, b) {
    return a - b;
  });
  //matrixTotalSize = rows * columns;
  for(var y = 0; y < matrix.length; y++) {
    matrix[y] = new Array(columns).fill(0);
    for(var x = 0; x < matrix[y].length; x++) {
      matrix[y][x] = randomValues[x + (y * columns)];
    }
  }

  console.log(matrix);
  return matrix;
}
matrixGenerator(4, 3);

module.exports = matrixGenerator;