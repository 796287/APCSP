//SnakeGame
//Connor Garratt
//November 14, 2018

//  Global variables
var snake;
var food = [];
var numSeg = 1;
var start = "true"
var font;
//starts score at 0
var score = 0;

//creates the canvas and speed of snake
//loads food
function setup(){
  textAlign(CENTER, CENTER);
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(70, 200, 30);
  loadSnake();
  loadFood(1);
}
//color of backgoud and score
function draw(){
  background(50, 100, 80);
  snake.run();
  textSize(50);
  text("score is " + score, 120, 50)
  noStroke();
  Score();
  for(var i = 0; i < food.length; i++){
    food[i].run();

  }

  checkLoc();
  deadGame();
  gameStart();
  Score();
}
//splices the food
function checkLoc(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == (0) && distY == (0)){
      food.splice(i, 1);
      loadFood(1);
      snake.segments.push(createVector(0, 0));
      console.log(snake.segments.length)
      score++;
    }
  }
}
//creates the snake
function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}
//creates the food on the screen
function loadFood(numFood){
  for(var i = 0; i < numFood; i++){
    var min = 1;
    //40 * 20 = 800
    var max = 39;
    var locX = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var locY = (Math.floor(Math.random() * (max - min + 1) + min)) * 20;
    var loc = createVector(locX, locY);
    var f = new Food(loc);
    food.push(f);
  }
}
//lets you move the snake with keyboard
function keyPressed(){
  start = "false"
  if(keyCode === 38){
    snake.vel = createVector(0, -20)
  }
  if(keyCode === 40){
    snake.vel = createVector(0, 20)
  }
  if(keyCode === 39){
    snake.vel = createVector(20, 0)
  }
  if(keyCode === 37){
    snake.vel = createVector(-20, 0)
  }
}
//kills the snake
function deadGame(){
  if(snake.status == "true"){
    snake = 0
    score = 0;
    text("Game Over refresh the game", 400, 400);
    loadSnake();
    gameStart();
    gameover();

  }
}
//splash screen
function gameStart(){
  if(start == "true"){
    textFont()
    fill(90, 250, 60);
    rect(225, 300, 350, 200);
    fill(50, 100, 50);
    rect(240, 315, 320, 170)
    fill(80, 200, 70);
    textAlign(CENTER);
    textSize(100);
    text("Snake", 400, 425)
  }
}
//winning game function
function Score(){
  if (score > 15){
  fill(255, 0, 5);
  textAlign(CENTER);
  text("YOU WON!!!!!!", 400, 400);
  }
}
