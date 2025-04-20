let currentColor = "dodgerblue";

const redBtn = document.querySelector("#redBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueBtn = document.querySelector("#blueBtn");
const yellowBtn = document.querySelector("#yellowBtn");
const clearGridBtn = document.querySelector("#clearGridBtn");

redBtn.addEventListener("click", () => {
  currentColor = "red";
});

greenBtn.addEventListener("click", () => {
  currentColor = "green";
});

blueBtn.addEventListener("click", () => {
  currentColor = "blue";
});

yellowBtn.addEventListener("click", () => {
  currentColor = "yellow";
});

clearGridBtn.addEventListener("click", () => {
  const containerDiv = document.querySelector("#container");
  containerDiv.innerHTML = "";
});

function createTiles(gridSize) {
  const containerDiv = document.querySelector("#container");
  const tileSize = 700 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");
    tileDiv.style.width = `${tileSize}px`;
    tileDiv.style.height = `${tileSize}px`;
    tileDiv.style.opacity = "0.1";
    containerDiv.appendChild(tileDiv);

    tileDiv.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(tileDiv.style.opacity);
      if (currentOpacity < 1) {
        tileDiv.style.opacity = (currentOpacity + 0.1).toString();
      }
      tileDiv.style.backgroundColor = currentColor;
    });
  }
}

const gridSizeBtn = document.querySelector("#gridSizeBtn");
gridSizeBtn.addEventListener("click", () => {
  const input = prompt("Enter a grid size ranging from 5-100.");
  const gridSize = parseInt(input, 10);

  if (isNaN(gridSize) || gridSize < 5 || gridSize > 100) {
    alert("Enter a valid number between 5-100.");
    return;
  }

  const containerDiv = document.querySelector("#container");
  containerDiv.innerHTML = "";

  createTiles(gridSize);
});

createTiles(10);
