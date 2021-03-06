
//creates location and velocity of the snake
function Snake(loc, vel){

  this.loc = loc;
  this.vel = vel;
  this.segments = [];
  this.status = "false";


  this.run = function(){
    this.update();
    this.render();
    this.dead();
  }
//updates and adds segments to snake also constrains the snake
  this.update = function(){
    for(var i = this.segments.length - 1; i >= 0; i--){
      if(i > 0){
        this.segments[i].x = this.segments[i-1].x;
        this.segments[i].y = this.segments[i-1].y;
      }else{
        this.segments[0].x = this.loc.x;
        this.segments[0].y = this.loc.y;
      }
    }
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, 800-20)
    this.loc.y = constrain(this.loc.y, 0, 800-20)
  }

  this.render = function(){
    for(var i = 0; i < this.segments.length; i++){
      fill(random(255,0)), (random(255,0)), (random(255,0));
      stroke(121, 139, 19);
      rect(this.segments[i].x, this.segments[i].y, 20, 20)
    }
    fill(0, 0, 0);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

//kills the snake 
  this.dead = function(){
    for(var i = 0; i < this.segments.length; i++){
      var distX = this.loc.x - this.segments[i].x;
      var distY = this.loc.y - this.segments[i].y;
      if((distX == 0) && (distY == 0)){
        this.status = "true";
        console.log(this.status);
      }
    }
  }
}
