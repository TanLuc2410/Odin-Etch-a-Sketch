const container = document.querySelector(".container");

const maxOpacity = 1;
const interactionCount = 0;

const buttonToMakeGrid = document.createElement("button");
buttonToMakeGrid.classList.add("gridButton");
buttonToMakeGrid.innerText = "Click me for a new grid!";
document.body.appendChild(buttonToMakeGrid);

buttonToMakeGrid.addEventListener("click", function() {
    let newGridSize = prompt("Please tell me your desired new grid size (Max: 100):");
    if (Number.isNaN(parseInt(newGridSize))) {
        alert("ERROR! Please enter a number");
    }
    newGridSize = Math.min(100, Math.max(1, parseInt(newGridSize) || 0)); // Upper-limit at 100.

  if (newGridSize) {
    container.innerHTML = ""; // Clear existing grid
    // const containerSize = container.getBoundingClientRect(); // Get container dimensions
    // const cellSize = containerSize.width / newGridSize; // Calculate new cell size
    generatingGrid(newGridSize); // Create new grid with adjusted size

    // Update gridItem styles (width & height)
    const gridItems = document.querySelectorAll(".gridItem");
    // gridItems.forEach(item => item.style.width = `${cellSize}px`);
    // gridItems.forEach(item => item.style.height = `${cellSize}px`);

    gridItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            const currentOpacity = parseFloat(this.style.opacity) || 0;
            console.log(currentOpacity);
    
            if (interactionCount < 10) {
                const newOpacity = Math.min(maxOpacity, currentOpacity + 0.1);
                this.style.opacity = newOpacity;
                interactionCount + 1;
            }
        });
    });
  } 
})

function generatingGrid(gridSize) {
    const cellSize = 960 / gridSize;
    
    for(let i = 1; i <= (gridSize * gridSize); i++) {
        let cell = document.createElement("div");
        cell.classList.add("gridItem");
        container.appendChild(cell);

        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });
    }
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(item => item.style.width = `${cellSize}px`);
    gridItems.forEach(item => item.style.height = `${cellSize}px`);
}
// generatingGrid(16);

// const gridItems = document.querySelectorAll(".gridItem");





