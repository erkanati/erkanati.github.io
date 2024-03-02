
const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const yourTextEl = document.getElementById('yourText')

const submitB = document.getElementById('submit')
const stopB = document.getElementById('stop')

let timeout

let idx = 0
let speed = 300 / speedEl.value 

yourTextEl.addEventListener('keypress', function (event){
    if (event.key === 'Enter'){
        event.preventDefault()
        writeText()
    }
})
submitB.addEventListener('click', ()=> writeText())


function writeText(){
    const yourText = yourTextEl.value.trim()

    textEl.innerText = yourText.slice(0, idx)

    idx++

    if(idx > yourText.length){
        idx = 0
    }

    timeout = setTimeout(writeText, speed)
    timeout
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)



stopB.addEventListener('click', ()=>{
    clearTimeout(timeout)})