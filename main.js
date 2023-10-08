const container = document.querySelector('#container')
const resizeBtn = document.querySelector('#resize-btn')
const clearBtn = document.querySelector('#clear-btn')

function changeColor(e) {
    e.target.style.backgroundColor = 'black'
}

function setGridSize(size = 256) {
    for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.classList.add('square')
        div.addEventListener('mouseover',changeColor)
        container.appendChild(div);
    }

    container.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`
    container.style.gridTemplateRows = `repeat(${Math.sqrt(size)}, 1fr)`

}

function clearGrid() {
    container.innerHTML = ''
}

function resize() {
    let newSize = prompt('enter a size');
    clearGrid()
    setGridSize(newSize)

}

function resetGrid() {
    clearGrid();
    setGridSize()
}


resizeBtn.addEventListener('click', resize);
clearBtn.addEventListener('click', resetGrid);

setGridSize(256)