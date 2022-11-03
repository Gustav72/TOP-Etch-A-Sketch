const container = document.querySelector("#container");

const dimension = 16;

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