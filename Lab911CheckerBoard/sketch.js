/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares = [];
var numberOfSquares = 8
var squareSize ;

function setup() {
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  loadSquares(8);
  for(var i = 0; i < squares.length; i++){
    squareSize = width/numberOfSquares;
    squares[i].render();
  }
}

function loadSquares(size){
  var rowNum = 0;
  for(var rowNum = 0; rowNum< size; rowNum++){
  var row = 100*rowNum
    for(var colNum = 0; colNum < size; colNum++){
  var col = 100*colNum
  var loc = createVector (col,row)
  var s = new Sqr(loc, 100, color (255, 255, 255));
  squares.push(s);
  }
}
}
  //  create a square object and push it into the squares array

  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable
