const container = document.querySelector("#container");

const dimension = 16;

generateGrid(dimension);

function generateGrid(dimension) {

       for (let i = 0; i < dimension; i++) {
       const row = document.createElement('div');
       row.classList.add('row')
       container.appendChild(row)

       for (let j = 0; j < dimension; j++) {
           const square = document.createElement('div');
           square.classList.add('square');
           row.appendChild(square);
       }
    }   
}

function changeGrid() {
    const node = document.getElementById('container');
    node.innerHTML = '';
    const newDimension = prompt("Number of Squares Per Side (must be no more than 100)")
    if (newDimension > 100) changeGrid();
    generateGrid(newDimension);
}