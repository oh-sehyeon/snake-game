const GRID_SIZE =  21;

//Generates a random position
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1, 
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    }
}

//Return boolean value checking wheter it's outside the grid or not
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}