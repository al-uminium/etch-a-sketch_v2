//queryselectors

const sketchContainer = document.querySelector("#sketch-container");
const cleanGrid = document.querySelector(".clean-grid");
const gridSizeText = document.querySelector("#grid-size-text");
const blackBrush = document.querySelector("#black-brush");
const rainbowBrush = document.querySelector("#rainbow-brush");

//cleanliness lol
const gridBGColor = "rgb(246, 242, 247)";
const rainbowColors = [
    "rgb(255,0,0)",
    "rgb(255,127,0)",
    "rgb(255,255,0)",
    "rgb(127,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,127)",
    "rgb(0,255,255)",
    "rgb(0,127,255)",
    "rgb(0,0,255)",
    "rgb(127,0,255)",
    "rgb(255,0,255)",
    "rgb(255,0,127)"
]

const randomNumber = (int) => Math.floor(Math.random()*int);

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
    removeGrid()
    createGrid(totalNoOfGrids**0.5)
}

function removeGrid() {
    const totalNoOfGrids = sketchContainer.childElementCount
    for (let i = 0; i < totalNoOfGrids; i++) {
        sketchContainer.childNodes[0].remove();
    }
}

function newGrid(gridSize) {
    if (!(isNaN(gridSize))) {

        if (gridSize<=100) {
            removeGrid();
            createGrid(gridSize);
        } else {
            window.alert("It's too big! Try numbers from 2-100")
        } 
    } else {
        window.alert("Invalid grid size entered, please try again.")
    }
}

function setHoverEventListener() {
    const totalNoOfGrids = sketchContainer.childElementCount

    if (blackBrush.checked) {
        for (let i = 0; i < totalNoOfGrids; i++) {
            sketchContainer.childNodes[i].addEventListener("mouseover", (mouseTarget) => {
                mouseTarget.target.style.backgroundColor = `rgb(36, 40, 48)`;
            })
        }
    }

    if (rainbowBrush.checked) {
        const rainbowColorNumber = rainbowColors.length
        for (let i = 0; i < totalNoOfGrids; i++) {
            sketchContainer.childNodes[i].addEventListener("mouseover", (mouseTarget) => {
                mouseTarget.target.style.backgroundColor = rainbowColors[randomNumber(rainbowColorNumber)];
            })
        }
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

    blackBrush.addEventListener("click", () => {
        const totalNoOfGrids = sketchContainer.childElementCount
        newGrid(totalNoOfGrids**0.5)
    })

    rainbowBrush.addEventListener("click", () => {
        const totalNoOfGrids = sketchContainer.childElementCount
        newGrid(totalNoOfGrids**0.5)
    })
}

function initialize() {
    createGrid(20);
    setEventListeners();
}

initialize()