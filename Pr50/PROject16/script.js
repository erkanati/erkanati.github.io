const buttons = document.querySelectorAll('.pression')

buttons.forEach(button => {
    button.addEventListener('click', function(event){
        const x = event.clientX //thing of whole window pixel by x and y
        const y = event.clientY 

        const buttonTop = event.target.offsetTop //const thing
        const buttonLeft = event.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log("x:", x, "y:", y)
        console.log(buttonLeft) //403
        console.log(xInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px';

        this.appendChild(circle) //this does not work with arrow function ()=> if you need use regular function

        setTimeout(()=>circle.remove(), 500) //cleanUp

    })
})