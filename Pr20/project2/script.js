const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value

// console.log(typeof ticketPrice)
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length

    
    count.innertext = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}

movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value
    updateSelectedCount()
})

container.addEventListener('click', function(event){
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected')

        updateSelectedCount()
    }
})

const mymood = 'Actually great! Because I added all of courses list into Notion for tracking and analyzing'