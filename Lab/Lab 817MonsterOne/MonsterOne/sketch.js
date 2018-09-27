

//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  fill(50, 200, 25);


}

//  The draw function is called @ 30 fps
function draw() {
fill(200, 30, 150);
rect(300, 500, 100, 100);
//eyes1
fill(20, 30, 150);
ellipse(325, 500, 35, 35);
//eyes2
ellipse(375, 500, 35, 35);
//mouth
fill(50, 200, 25);
rect(325, 550, 45, 45);
fill(255, 255, 255);
triangle(325, 550, 345, 550, 345, 585);
triangle(370, 550, 345, 550, 355, 585);

//monster 2
fill(200, 30, 150);
rect(450, 500, 100, 100);
//eyes1
fill(20, 30, 150);
ellipse(475, 500, 35, 35);
//eyes2
ellipse(525, 500, 35, 35);
//mouth
fill(50, 200, 25);
rect(475, 550, 45, 45);
fill(255, 255, 255);
triangle(475, 550, 495, 550, 495, 585);
triangle(520, 550, 495, 550, 505, 585);

//monster 3
fill(200, 30, 150);
rect(300, 650, 100, 100);
//eyes1
fill(20, 30, 150);
ellipse(325, 650, 35, 35);
//eyes2
ellipse(375, 650, 35, 35);
//mouth
fill(50, 200, 25);
rect(325, 700, 45, 45);
fill(255, 255, 255);
triangle(325, 700, 345, 700, 345, 735);
triangle(370, 700, 345, 700, 355, 735);
}
