
//Connor Garratt
//October 30, 2018
//color bar


//  Global variables

var Bars = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  numBars = 70;
  loadBars(numBars);
  bubbleSort(Bars);
}

function draw() {
  background(20, 20, 20, 6000);
  noStroke();
  for(var i = 0; i < Bars.length; i++){
    Bars[i].run();
  }
}
//creates the color bar and puts the bars into an array
