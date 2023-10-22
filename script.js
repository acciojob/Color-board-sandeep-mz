const squareContainer = document.getElementById('square-container');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColorOnHover(square) {
  const originalColor = square.style.backgroundColor;
  square.style.backgroundColor = getRandomColor();
  setTimeout(function () {
    square.style.backgroundColor = originalColor;
  }, 1000);
}

for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => changeColorOnHover(square));
  squareContainer.appendChild(square);
}
