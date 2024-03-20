const container = document.querySelector('.container')
const URL = 'https://source.unsplash.com/random/'
const rows = 11


for(let i=0; i< rows*3; i++){
    const img = document.createElement('img')
    img.src=`${URL}${randomSize()}`
    container.appendChild(img)
}
// const image = document.createElement('image')

// image.innerHTML = `<img src = 'https://images.unsplash.com/photo-1710115929211-ae9646071f6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>`

// container.appendChild(image)

function randomSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`
}



function getRandomNumber(){
    return Math.floor(Math.random()*10) + 300
}
