//queryselectors

const sketchContainer = document.querySelector("#sketch-container");
const cleanGrid = document.querySelector(".clean-grid");
const gridSizeText = document.querySelector("#grid-size-text");

//cleanliness lol
const gridBGColor = "rgb(246, 242, 247)";

function createGridCells() {
    const newDiv = document.createElement("div");
    newDiv.className = "grid-cell";
    sketchContainer.appendChild(newDiv);
}

function setGridRowCol(width) {
    sketchContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${width}, 1fr)`;
}

//expects the size of the grid - e.g., a 2x2 grid will have size of 4. 
function createGrid(width) {
    size = width**2;
    for (let i = 0; i<size; i++) {
        createGridCells();
    }
    setGridRowCol(width);
    setHoverEventListener();
}

function clearGrid() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[i].style.backgroundColor = gridBGColor;
    }
}

function removeGrid() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[0].remove();
    }
}

function newGrid(gridSize) {
    if (!(isNaN(gridSize)) && !(gridSize%2)) {
        removeGrid();
        createGrid(gridSize);
        
    } else {
        window.alert("Invalid grid size, please try again.")
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

const setEventListeners = () => {
    cleanGrid.addEventListener("click", clearGrid)
    gridSizeText.addEventListener("keypress", (textfield) => {
        if (textfield.key === 'Enter') {
            gridSize = parseInt(textfield.target.value);
            newGrid(gridSize);
        }
    })
}

function initialize() {
    createGrid(10);
    setEventListeners();
}

initialize()