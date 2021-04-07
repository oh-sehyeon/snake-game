import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 10;
const snakeBody = [ {x: 11, y: 11} ];
let newSegments = 0; 

//Updates Snake position on the grid
export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length-2; i>= 0; i--) {
        snakeBody[i+1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

//Draws snake on the gameobard
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

//Increases Snake's size by the amount value (EXPANSION_RATE on food.js)
export function expandSnake(amount) {
    newSegments += amount;
}

//Check if the snake is on the food's location
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions (segment, position);
    });
}

//Gets Snake head's position
export function getSnakeHead() {
    return snakeBody[0];
}

//Check if Snake's head is intersected with an element
export function snakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true} );
}

//Check if an element's position is equal to another's
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

//Adds one more segment
function addSegments() {
    for(let i=0; i<newSegments; i++) {
        snakeBody.push( { ...snakeBody[snakeBody.length] -1 } );
    }
    newSegments = 0; 
}