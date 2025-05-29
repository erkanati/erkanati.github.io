const openB = document.querySelector('.open-btn')
const closeB = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')


openB.addEventListener('click', ()=>{
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

closeB.addEventListener('click', ()=>{
    
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

window.addEventListener('click', function(event){
    const x = event.clientX
    const y = event.clientY

    const Top = event.target.offsetTop
    const Left = event.target.offsetLeft

    if(x > 480 ){
        nav.forEach(nav_el => nav_el.classList.remove('visible'))

    }

    const xOut = x - Left
    const yOut = y - Top

    console.log("x:", xOut, "y:", yOut)

    console.log(Left, 'left')
    console.log(Top, 'top')




})







