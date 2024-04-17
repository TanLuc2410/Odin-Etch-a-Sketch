const container = document.querySelector(".container");

const buttonToMakeGrid = document.createElement("button");
buttonToMakeGrid.classList.add("gridButton");
buttonToMakeGrid.innerText = "Click me for a new grid!";
document.body.appendChild(buttonToMakeGrid);




function makeGrid(gridSize) {
    const cellSize = Math.min(960 / gridSize, 10);
    container.textContent = "";
    
    for(let i = 1; i <= (gridSize * gridSize); i++) {
        let cell = document.createElement("div");
        cell.classList.add("gridItem");
        cell.style.width = `${cellSize}`;
        cell.style.height = `${cellSize}`;

        container.appendChild(cell);
        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
        cell.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });
    }
}
makeGrid(16);

