const gridContainer = document.getElementById("grid-container");

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    createRow(gridSize);
  }
};

const createRow = (gridSize) => {
  const row = document.createElement("div");
  row.classList.add("row");
  gridContainer.appendChild(row);

  for (let i = 0; i < gridSize; i++) {
    createSquare(row);
  }
};

const createSquare = (row) => {
  const square = document.createElement("div");
  square.classList.add("square");
  row.appendChild(square);
  square.addEventListener("mouseover", draw);
  return square;
};

const draw = (e) => {
  e.target.style.backgroundColor = "black";
};

createGrid(16);
