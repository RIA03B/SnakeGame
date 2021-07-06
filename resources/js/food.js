//This function is to determine where the location of the food will be (random location).
//The fuction also draws the food.
function Food() {
    this.x;
    this.y;  
    this.pickLocation = function() {
      this.x = (Math.floor(Math.random() *
        columns - 1) + 1) * scale;
      this.y = (Math.floor(Math.random() *
        rows - 1) + 1) * scale;
    }  
    this.draw = function() {
      ctx.fillStyle = "#af4c50";
      ctx.fillRect(this.x, this.y, scale, scale)
    }
  }