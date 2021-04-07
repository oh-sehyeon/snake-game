import { update as updateSnake, draw as drawSnake,  SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

//Main function that gets the current time and uses it to update snake's position and draw
function main(currentTime) {
    if (gameOver) {
        if (confirm('Game Over! Press OK to restart the game')) {
            window.location = '/snake-game';
        }
        return
    }

    window.requestAnimationFrame(main);
    const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
    
    if (timeSinceLastRender < 1/SNAKE_SPEED) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

//function to update snake
function update() {
    updateSnake();
    updateFood();
    checkGameOver();
}

//function to draw gameboard
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

//check if it's gameover
function checkGameOver() {
    gameOver = outsideGrid( getSnakeHead() ) || snakeIntersection();
}