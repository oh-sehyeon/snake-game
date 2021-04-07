import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { updatePoints } from './points.js'

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

//Update Snake size, points and food position when snake eats the food
export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        updatePoints();
        food = getRandomFoodPosition();
    }
}

//Draw food on the gameboard
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

//Generates a random position for the food
function getRandomFoodPosition() {
    let newFoodPosition;

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition(); 
    }
    return newFoodPosition;
}