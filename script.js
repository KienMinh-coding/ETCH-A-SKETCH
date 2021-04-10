createGrid(16);


function createGrid(square) {
  const container = document.querySelector("#container");
  container.style.cssText = `grid-template-rows: repeat(${square}, auto); grid-template-columns: repeat(${square}, auto);`;

  for (let i = 0; i < square * square; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square-style");
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.cssText = `background-color: ${getRandomColor()}`;
    });
    container.appendChild(gridSquare);
  }
}
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  changeSize();
});

function changeSize() {
  let input = prompt("Enter new size");
  checkSize(input);
}

function checkSize(size) {
  if (size == null) {
    return;
  } else if (isNaN(size) || size > 64 || size < 1) {
    alert('Enter a number from 1-64 range');
    changeSize();
  } else {
    reCreateGrid(size);
  }
}

function reCreateGrid(size) {
  const container = document.querySelector("#container");
  container.style.cssText = '';
  const gridSquares = document.querySelectorAll(".square-style");
  gridSquares.forEach((gridSquare) => {
    gridSquare.remove();
  })
  createGrid(parseInt(size));
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

