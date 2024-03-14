//event bubbling... for many buttons for many users


const ratings = document.querySelectorAll('.rating')
const ratingsC = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'


ratingsC.addEventListener('click', (event)=>{
    if(event.target.parentNode.classList.contains('rating')){
        removeActive()
        event.target.parentNode.classList.add('active')
        selectedRating = event.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (event)=>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use your feedback to improve our support</p>
    `


})


function removeActive(){
    for(let i=0; i<ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}