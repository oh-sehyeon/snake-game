let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

//Checks which key is being clicked by the user
window.addEventListener("keydown", e => {
    switch(e.key) {
        case 'ArrowUp': 
            if(lastInputDirection.y !== 0) break;
            inputDirection = {x: 0, y: -1};
            break;
        case 'ArrowDown': 
            if(lastInputDirection.y !== 0) break;
            inputDirection = {x: 0, y: 1};
            break;
        case 'ArrowRight': 
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x: 1, y: 0};
            break;
        case 'ArrowLeft': 
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x: -1, y: 0};
            break;
    }
});

//Gets the direction
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection;
}




//Bind Arrow buttons with Keys
document.querySelector('.fa-arrow-alt-circle-up').addEventListener('click', ()=>{
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowUp'}));
});

document.querySelector('.fa-arrow-alt-circle-down').addEventListener('click', ()=>{
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
});

document.querySelector('.fa-arrow-alt-circle-left').addEventListener('click', ()=>{
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
});

document.querySelector('.fa-arrow-alt-circle-right').addEventListener('click', ()=>{
    window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowRight'}));
});