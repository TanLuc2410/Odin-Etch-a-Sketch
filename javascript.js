const container = document.querySelector(".container");

function makeGrid(gridRows, gridCols) {
    for(let i = 1; i <= (gridRows * gridCols); i++) {
        let cell = document.createElement("div");
        cell.innerText = i;
        cell.classList.add("gridItem");
        container.appendChild(cell);
    }
}
makeGrid(16, 16);