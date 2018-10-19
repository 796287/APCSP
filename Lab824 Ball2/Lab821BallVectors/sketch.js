//Global variables
var b1;
var b2;
var b3;

// put setup code here
function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  b1 = new Ball(random(width), random(height), random(15,35), getrandomcolor(255));
  b2 = new Ball(random(width), random(height), random(15,35), getrandomcolor(255));
  b3 = new Ball(random(width), random(height), random(15,35), getrandomcolor(255));

}
function draw() {
  b1.run();
  b2.run();
  b3.run();
}

function getrandomcolor() {
  var b= random(255) ;
  var r= random(255) ;
  var g= random(255) ;
  var col = color(b,r,g);
return col
}
