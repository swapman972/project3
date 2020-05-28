//Open and close the pokedex
document.addEventListener('click', e => {
    if(e.target.id == "appPokedex"){
        pokedexWindow.style.display = "block"
    }else if(e.target.id == "closePokedex"){
        pokedexWindow.style.display = "none"
    }
})



document.addEventListener('DOMContentLoaded', () => {
    const pokedexPage = document.getElementById('pokedex')
    const pokeApp = document.getElementById("appPokedex")
    let pokeSound = "./app/assets/sounds/pokedexOpen.mp3"
    let introPokedex = new Audio()
    introPokedex.volume = 0.5
    introPokedex.src = pokeSound
    pokeApp.addEventListener('click', ()=> {introPokedex.play() })
    
    //function to display one pokemon
    const displayPokemon = (pokemon) => {
        const pokemonHMTLString = pokemon
        .map((poke) =>`
        <li class="card">
        <p class="card-number">${poke.id}</p>
        <img class="card-image" data-class="not-shiny" src="${poke.image}"/>
        <h2 class="card-title">${poke.name}</h2>
        <p class="card-subtitle">Type: ${poke.type}</p>
        </li>` )
        .join('')
        pokedexPage.innerHTML = pokemonHMTLString
    }

    //function to fetch all wanted pokemon (and displaying them)
    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i <= 151; i++){
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            promises.push(fetch(url).then((res) => res.json()))
        }
        Promise.all(promises).then((results) => {
            const pokemon = results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                id: result.id
            }))
            displayPokemon(pokemon)
        })
    }
    
    fetchPokemon()
    
    //event listener to change a pokemon image not-shiny <=> shiny
    pokedexPage.addEventListener('click', (event) =>{
        if(event.target.tagName === "IMG" && event.target.dataset.class == "not-shiny"){
            fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.parentElement.firstElementChild.innerText}`)
            .then(resp => resp.json())
            .then(poke => {
                event.target.src = poke.sprites['front_shiny']
                event.target.dataset.class = "shiny"
            })
        } else if (event.target.tagName === "IMG" && event.target.dataset.class == "shiny"){
            fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.parentElement.firstElementChild.innerText}`)
            .then(resp => resp.json())
            .then(poke => {
                event.target.src = poke.sprites['front_default']
                event.target.dataset.class = "not-shiny"
            })
        }
    })
})

