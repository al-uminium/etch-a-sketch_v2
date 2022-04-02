//queryselectors

const sketchContainer = document.querySelector("#sketch-container");

function createGridCells() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-cell"
    sketchContainer.appendChild(newDiv)
}

function assignGridCSS(width) {
    sketchContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    sketchContainer.style.gridTemplateRows = `repeat(${width}, 1fr)`
}

//expects the size of the grid - e.g., a 2x2 grid will have size of 4. 
function createGrid(size) {
    if (!(size%2)) {
        width = size/2;

        for (let i = 0; i<size; i++) {
            createGridCells()
        }

        assignGridCSS(width)
    } else {
        console.log("Didn't work")
    }
}