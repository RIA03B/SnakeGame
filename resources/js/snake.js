//This is to create the snake
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  //This function is going to create the rectangle (The snake). It will be white.
  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    for (let i=0; i<this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }  
    ctx.fillRect(this.x, this.y, scale, scale);
  }  
  // This function is to update the speed of the snake
  this.update = function() {
    for (let i=0; i<this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }  
    this.tail[this.total - 1] =
      { x: this.x, y: this.y };  
    this.x += this.xSpeed;
    this.y += this.ySpeed;  
    if (this.x > canvas.width) {
      this.x = 0;
    }  
    if (this.y > canvas.height) {
      this.y = 0;
    }  
    if (this.x < 0) {
      this.x = canvas.width;
    }  
    if (this.y < 0) {
      this.y = canvas.height;
    }
  }  
  //This function is to handle key presses and we use a switch statment to do so.
  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  } 
  // This function handles when the snake hits the food.
  //This fuction also increments total when food is eaten. 
  this.eat = function(food) {
    if (this.x === food.x &&
      this.y === food.y) {
      this.total++;
      return true;
    }  
    return false;
  } 
  // This function is to store the amount of food eaten by the snake.
  this.checkCollision = function() {
    for (var i=0; i<this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
      }
  }
  }
}
