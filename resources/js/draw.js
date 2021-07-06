const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
//Amount of rows we will have
const rows = canvas.height / scale;
//Amount of columns we will have
const columns = canvas.width / scale;

var snake;
//This function is going to initialize the snake and make the snake move. 
//The function will also pick a location for the food and display it.
//This function will also move the location of the food after it is eaten by the snake.
(function setup() {
  snake = new Snake();
  food = new Food();
  food.pickLocation();
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();
    if (snake.eat(food)) {
        food.pickLocation();
    }
    snake.checkCollision();
    document.querySelector('.score')
      .innerText = snake.total;
  }, 250);
}());
//When a key press occurs we get an event.
window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));