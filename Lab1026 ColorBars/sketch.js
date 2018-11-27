
//Connor Garratt
//October 30, 2018
//color bar


//  Global variables

var Bars = [];

//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200, 200, 200);
 numBars = 150;
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
//Creates the colors
function loadBars(numBars){
   for(var i = 0; i < numBars; i++){
     var w = 800/numBars;
     var h = 800;
     var loc = createVector(0+(w*i), 150);
     var red = random(0, 25);
     var green = random(0, 210);
     var blue = random(0, 255);
     var clr = color(red, green, blue);
     var clrAvg = (red + green+ blue)/3;
     var bar = new colorbar(loc, w, h, clr, clrAvg);
     Bars.push(bar);
  }
}


function bubbleSort(Bars) {
    var length = Bars.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
        var a = Bars[j].clrAvg;
        var b = Bars[j+1].clrAvg;
        if(a > b) {
          var temp = Bars[j];
          Bars[j] = Bars[j+1];
          Bars[j+1] = temp;
            }
        }
    }
}
