function createTileGrid(size) {
  const containerDiv = document.querySelector("#container");
  const tileSize = 700 / size;

  for (let i = 0; i < size * size; i++) {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");
    tileDiv.style.width = `${tileSize}px`;
    tileDiv.style.height = `${tileSize}px`;
    containerDiv.appendChild(tileDiv);
  }
}

createTileGrid(10);
