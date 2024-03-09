const container = document.getElementById('container')

const colors = ['#eaeae5', '#2867d3', '#debc13', '#14d34a', '#6014d3', '#f58e07',  '#ca2929', '#3c1a1a']

const squaresL = 500 //length

for(let i=0; i<squaresL; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))
    container.appendChild(square)

}

function setColor(element){
    const color = getRandomcolor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';


}

function getRandomcolor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

for(i=0; i<=colors.length; i++){
    const justSquare = document.createElement('div') //creates div
    justSquare.classList.add('justSquare') //adds class to div
    justSetColor(justSquare, colors[i]) //function justSetColor fill divs with colors WOW
    container.appendChild(justSquare)
}

function justSetColor(el, col){
    el.style.background = col
    el.style.boxShadow = `0 0 2px ${col}, 0 0 10px ${col}`
    console.log(col)
}

