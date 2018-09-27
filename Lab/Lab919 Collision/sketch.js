
//Connor Garratt
//September 19, 2018
//collision Detection
//  Global variables
var boids = [];
var chaser;

// put setup code here
function setup() {
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  loadBoids(100);  //  !!!!!!!!!!  this is a function call
  chaser = new Ball(createVector);
}

function draw() {
  for(var i=0; i<boids.length; i++){
    boids[i].run();
  }
}

function loadBoids(numBoids){

    for(var i = 50; i < numBoids; i++){
        var loc = createVector(0,0);
        var boids = new boids(loc, col);
        var col = color(random(255), random(255), random(255));
        var vel = createVector(0,0)
        boids.push(new boids(loc, vel, rad, col));

    }
console.log(boids);
}
