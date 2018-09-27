//  Global variables
var b1;
var balls=[];
//var b2;
//var b3;
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBalls(100
  );

}

function loadBalls(number){
  for(var i=0; i<number; i=i+1){
    var h= random(height);
    var w= random(width);
    var rad = random(50, 50);
    b1= new Ball(w, h, rad, color(100, 50, 100));
    balls.push(b1);
  }
}

function draw() {
  for(var i=0; i<balls.length; i=i+1){
    balls[i].run();
  }
  //b2.run();
  //b3.run();
}

function getrandomcolor() {
  var b= random(255) ;
  var r= random(255) ;
  var g= random(255) ;
  var col = color(b,r,g);
return col;
}
