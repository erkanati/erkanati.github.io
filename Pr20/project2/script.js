const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value
populateUI()
// console.log(typeof ticketPrice)
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    //const arr = [1,2,3]
    //const arr2 = [...arr, 4,5] -> [1,2,3,4,5]
    const seatsIndex = [...selectedSeats].map(function(seat){
        // console.log([...seats].indexOf(seat))
        return [...seats].indexOf(seat)
    }) 
    //forEach:
    //arr2.forEach(function(item){
    //   console.log(item)})
    
    //map: return array
    /* 
        arr3 = arr2.map(function(item){
            return item * 2
        })

        console.log(arr3) -> [2, 4, 6, 8, 10]    
    */
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
    const selectedSeatsCount = selectedSeats.length

    
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice

    
}


// Save selected movie index and price:
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
} 


//getting data from local storage to UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })

    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

movieSelect.addEventListener('change', event => {
    ticketPrice = +event.target.value
    setMovieData(event.target.selectedIndex, event.target.value)
    updateSelectedCount()
})

container.addEventListener('click', function(event){
    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){
        event.target.classList.toggle('selected')

        updateSelectedCount()
    }
})

const mymood = 'Actually great! Because I added all of courses list into Notion for tracking and analyzing'

//initial count and total set
updateSelectedCount()


const git_update = "Finally I've learned git add. git commit git pull git push" 

const myversion = 'Already created my own version as collaborator!'
const myupdate = "My update commit version"
