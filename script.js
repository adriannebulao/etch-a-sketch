const gridContainer = document.getElementById("grid-container");

const createSquare = () => {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);
  return square;
};

for (let i = 0; i < 256; i++) {
  createSquare();
}
console.log(gridContainer);
