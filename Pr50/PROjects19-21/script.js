//pr1 I mean 19
const panels = document.querySelectorAll('.panel')

panels.forEach((panel)=>{
    panel.addEventListener('mousemove', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

//pr2 I mean 20
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //Nodelist

let currentActive = 1

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length

    }   

    update() 
})

prev.addEventListener('click', ()=>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    } 
    
    update()
})

function update(){
    circles.forEach((circle, idx)=>{

        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1)/ (circles.length-1)) * 100 + '%'

    if(currentActive ===1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn1')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})
