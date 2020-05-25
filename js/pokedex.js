// load all the pokedex at dom content loaded on the window for it
// when you click on one you can see whats up

document.addEventListener('DOMContentLoaded', () => {
    const pokedexPage = document.getElementById('pokedex')

    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i <= 150; i++){
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
    const displayPokemon = (pokemon) => {
        const pokemonHMTLString = pokemon
        .map((poke) =>`
        <li class="card">
            <img class="card-image" src="${poke.image}"/>
            <h2 class="card-title">${poke.id}. ${poke.name}</h2>
            <p class="card-subtitle">Type: ${poke.type}</p>
        </li>`
        )
        .join('')
        pokedexPage.innerHTML = pokemonHMTLString
    }
    fetchPokemon()
})
