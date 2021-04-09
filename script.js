let square = 16;

const container = document.querySelector('#container');
container.style.cssText = `grid-template-rows: repeat(${square}, auto); grid-template-columns: repeat(${square}, auto);`;


for(let i = 0; i < square*square; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('square-style');
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.classList.add('change-bgColor');
    });
    container.appendChild(gridSquare);
}
