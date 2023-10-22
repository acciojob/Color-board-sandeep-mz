// Create 800 squares dynamically
const squareContainer = document.querySelector('.square-container');
const squares = [];

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.defaultColor = 'rgb(29, 29, 29)'; // Store the default color

    squareContainer.appendChild(square);
    squares.push(square);
}

// Function to generate a random color in RGB format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Handle mouseover and mouseout events
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        if (square.style.backgroundColor === square.dataset.defaultColor) {
            square.style.backgroundColor = getRandomColor();
        }
    });

    square.addEventListener('mouseout', () => {
        if (square.style.backgroundColor !== square.dataset.defaultColor) {
            square.style.backgroundColor = square.dataset.defaultColor;
        }
    });
});
