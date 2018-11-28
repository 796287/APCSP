//SnakeGame
//Connor Garratt
//November 14, 2018

//  Global variables
var scl = 20;
var snake;
var food;


function setup() {
  createCanvas(800, 800);
  snake = new Snake();
  food  = new Food();
  frameRate(15);
snake = new Snake(createVector(width/2, height/2), createVector(1,0));
}

function draw() {
  background(25,150,30);

  snake.eat(food);
  snake.move();
  snake.draw();
  food.draw();
}

// function keyPressed(){
//   text(keyCode, 50, 50)
//   if(keyCode === UP_ARROW){
//     snake.vel = createVector(0, -1);
//     snake.loc.add(snake.vel);
//   }
//
//     if(keyCode === 40){
//       snake.vel = createVector(0, 1);
//       snake.loc.add(snake.vel);
//     }
//
//     if(keyCode === 37){
//       snake.vel = createVector(-1, 0);
//       snake.loc.add(snake.vel);
//     }
//
//     if(keyCode === 39){
//       snake.vel = createVector(1, 0);
//       snake.loc.add(snake.vel);
//     }
//
// }
function keyPressed() {
  if (keyCode === 38) {
    snake.dir(0, -1);
  } else if (keyCode === 40) {
    snake.dir(0, 1);
  } else if (keyCode === 39) {
    snake.dir(1, 0);
  } else if (keyCode === 37) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}
