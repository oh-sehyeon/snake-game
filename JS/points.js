let points = 0;

//Update the points of the game
export function updatePoints() {
    points += 1;
    document.getElementById('points').innerText = points;
}