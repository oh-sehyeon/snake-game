let points = 0;

export function updatePoints() {
    points += 1;
    document.getElementById('points').innerText = points;
}