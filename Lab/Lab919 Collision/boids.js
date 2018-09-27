
function Ball(location, velocity, radius, col){
  // Instance variables
   this.loc = location;
   this.vel = velocity;
   this.rad = radius;
   this.col = col;
  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
this.update = function(){
this.loc.add(this.vel);
}

this.checkEdges = function(){
  if(this.loc.x < 0) this.vel.x = -this.vel.x
  if(this.loc.x >width) this.vel.x = -this.vel.x
  if(this.loc.y < 0) this.vel.y = -this.vel.y
  if(this.loc.y > height) this.vel.y = -this.vel.y
}
  this.render = function(){
    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(someAngle);
    triangle(-5, 0, 5, 0, 0, -15);
    pop()  //  pop or restore the coordianate system from the stack
  }
}
