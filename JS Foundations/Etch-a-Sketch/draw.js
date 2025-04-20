function createTiles(size) {
  const containerDiv = document.querySelector("#container");
  const tileSize = 700 / size;

  for (let i = 0; i < size * size; i++) {
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
      tileDiv.style.backgroundColor = "dodgerblue";
    });
  }
}
createTiles(10);
