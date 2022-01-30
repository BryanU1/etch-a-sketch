const container = document.querySelector('#container');
let dimension = 16;
const body = document.querySelector('body');
const button = document.createElement('button');

button.textContent = 'reset';
body.appendChild(button);
button.addEventListener('click', () => {
  reset();
});

createGrid(dimension);

function createGrid(n) {
  for (let i = 0; i < n; i++) {   // creates n amounts of rows
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');
    container.appendChild(rowContainer);
    for (let i = 0; i < n; i++) { // creates n amounts of columns
      const unit = document.createElement('div');
      unit.addEventListener('mouseover', () => {
        unit.classList.add('hovering');
      });
      unit.classList.add('unit');
      rowContainer.appendChild(unit);
    } 
  }
}

function reset() {
  for (let i = 0; i < dimension; i++) {
    container.removeChild(container.lastChild);
  }
  dimension = prompt('Please enter grid size.')
  
  if(dimension > 100) {
    alert('Please choose a number less than 100.');
    return;
  }

  createGrid(dimension);
}