const poke_container = document.getElementById('poke-container')
const pokemon_count = 150

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceadff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const fetchPokemons = async () => {
    for(let i=1; i<= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const id = pokemon.id.toString().padStart(3, '0')



    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="pokemon">
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>grass</span></small>
        </div>

    `

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl)

}


fetchPokemons()

