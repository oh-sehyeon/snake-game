import { update as updateSnake, draw as drawSnake,  SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');


function main(currentTime) {
    if (gameOver) {
        if (confirm('Game Over! Press OK to restart the game')) {
            window.location = '/';
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

function update() {
    updateSnake();
    updateFood();
    checkGameOver();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkGameOver() {
    gameOver = outsideGrid( getSnakeHead() ) || snakeIntersection();
}