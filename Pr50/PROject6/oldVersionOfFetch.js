//AplicationProgrammingInterface with Old ..then way
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke(){
    const config ={
        headers:{ 
            'Accept': 'application/json'
        } 
    }
    fetch('https://icanhazdadjoke.com', config).then((response)=>response.json()).then((data)=>{
        jokeEl.innerText = data.joke
    })

}

