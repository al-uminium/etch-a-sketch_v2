//queryselectors

const sketchContainer = document.querySelector("#sketch-container");

function createGridCells() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-cell"
    sketchContainer.appendChild(newDiv)
}

function setGridRowCol(width) {
    sketchContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    sketchContainer.style.gridTemplateRows = `repeat(${width}, 1fr)`
}

//expects the size of the grid - e.g., a 2x2 grid will have size of 4. 
function createGrid(size) {
    width = size**0.5;
    if (!(width%2)) {
        for (let i = 0; i<size; i++) {
            createGridCells()
        }
        setGridRowCol(width);
        setHoverEventListener();
    } else {
        console.log("Didn't work");
    }
}

function clearGrid() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[i].style.backgroundColor = "rgb(246, 242, 247)";
    }
}

function removeGrid() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[0].remove();
    }
}

function setHoverEventListener() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[i].addEventListener("mouseover", (mouseTarget) => {
            mouseTarget.target.style.backgroundColor = `rgb(0,0,0)`;
        })
    }
}

createGrid(16)