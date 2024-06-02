const gridContainer = document.getElementById("grid-container");
const gridSizeInput = document.getElementById("grid-size");
const gridSizeText = document.getElementById("grid-size-text");
const brushModeInput = document.getElementsByName("brush-mode");
const colorPickerInput = document.getElementById("color-picker");
const colorPickerLabel = document.getElementById("color-picker-label");
const clearCanvasButton = document.getElementById("clear-canvas");

let brushMode;
let brushColor;

// Grid creation logic
const createGrid = () => {
  // Clear grid before creating new one
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create rows based on grid size slider
  const gridSize = gridSizeInput.value;
  for (let i = 0; i < gridSize; i++) {
    createRow(gridSize);
  }
};

// Grid creation helper function
const createRow = (gridSize) => {
  const row = document.createElement("div");
  row.classList.add("row");
  gridContainer.appendChild(row);

  // Create columns based on grid size slider
  for (let i = 0; i < gridSize; i++) {
    createSquare(row);
  }
};

// Row creation helper function
const createSquare = (row) => {
  const square = document.createElement("div");
  square.classList.add("square");
  row.appendChild(square);

  // Add draw functionality to each square on the grid
  square.addEventListener("mouseover", draw);
  return square;
};

// Draw logic based on currently selected brush mode
const draw = (e) => {
  switch (brushMode) {
    case "single":
    case "erase":
      e.target.style.backgroundColor = brushColor;
      break;
    case "rainbow":
      e.target.style.backgroundColor =
        "rgb(" +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ", " +
        getRandomNumber() +
        ")";
      break;
  }
};

// Rainbow brush mode helper function
const getRandomNumber = () => {
  const MIN = 0;
  const MAX = 255;
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
};

// Logic to switch between brush modes
const selectBrushMode = (e) => {
  switch (e.target.value) {
    case "single":
      colorPickerInput.disabled = "";
      colorPickerLabel.style.opacity = "1";
      brushMode = "single";
      setBrushColor();
      break;
    case "rainbow":
      colorPickerInput.disabled = "true";
      colorPickerLabel.style.opacity = "0.5";
      brushMode = "rainbow";
      break;
    case "erase":
      colorPickerInput.disabled = "true";
      colorPickerLabel.style.opacity = "0.5";
      brushMode = "erase";
      brushColor = "white";
      break;
  }
};

// Logic to set brush color based on color picker
const setBrushColor = () => {
  brushColor = colorPickerInput.value;
};

// Initialize default options on page load
window.addEventListener("load", () => {
  createGrid();
  gridSizeText.innerText = gridSizeInput.value + " x " + gridSizeInput.value;
  brushMode = "single";
  setBrushColor();
});

gridSizeInput.addEventListener("change", createGrid);
gridSizeInput.addEventListener("input", () => {
  gridSizeText.innerText = gridSizeInput.value + " x " + gridSizeInput.value;
});
for (let brushMode of brushModeInput) {
  brushMode.addEventListener("input", selectBrushMode);
}
colorPickerInput.addEventListener("change", setBrushColor);
clearCanvasButton.addEventListener("click", createGrid);
