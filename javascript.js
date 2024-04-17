const container = document.querySelector(".container");

const buttonToMakeGrid = document.createElement("button");
buttonToMakeGrid.classList.add("gridButton");
buttonToMakeGrid.innerText = "Click me!";
document.body.appendChild(buttonToMakeGrid);


function makeGrid(gridRows, gridCols) {
    for(let i = 1; i <= (gridRows * gridCols); i++) {
        let cell = document.createElement("div");
        cell.innerText = i;
        cell.classList.add("gridItem");
        container.appendChild(cell);

        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
        cell.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });
    }
}
makeGrid(16, 16);

