//your JS code here. If required.
// Create 800 squares dynamically
const squareContainer = document.querySelector('.square-container');

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    squareContainer.appendChild(square);
}

// Reset square colors after 1 second
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#ccc';
        }, 1000);
    });
});
