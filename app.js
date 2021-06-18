const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#C71585', '#483D8B', '#DDA0DD', '#00008B', '#7B68EE', '#00BFFF', '#00FFFF', '#800080']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', ()=> setColor(square) )
    square.addEventListener('mouseleave', ()=> removeColor(square) )

    board.append(square)
}



function setColor(el) {
    const color = getColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

function getColor() {
  const idx = Math.floor(Math.random() * colors.length)
   return colors[idx]
}