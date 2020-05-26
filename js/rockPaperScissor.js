let userScore = 0
let compScore = 0
const userScoreSpan = document.getElementById('user-score')
const compScoreSpan = document.getElementById('computer-score')
const scoreBoard = document.querySelector(".scoreboard")
const result = document.querySelector('.result')
const fire = document.getElementById('r')
const water = document.getElementById('p')
const grass = document.getElementById('s')
const restartBtn = document.getElementById('restart')
const changePokeBtn = document.getElementById('changePoke')

function pokemonPic() {
    let randomFire = Math.floor(Math.random() * 12)
    fetch('https://pokeapi.co/api/v2/type/fire/')
    .then(resp => resp.json())
    .then(json => {
        let firePokemonUrl = json.pokemon[randomFire].pokemon.url
        fetch(firePokemonUrl)
        .then(resp =>  resp.json())
        .then(json =>{
            let firePokemon = json.sprites.front_default
            fire.src = firePokemon
        })
    })

    let randomGrass = Math.floor(Math.random() * 14)
    fetch('https://pokeapi.co/api/v2/type/grass/')
    .then(resp => resp.json())
    .then(json => {
        let grassPokemonUrl = json.pokemon[randomGrass].pokemon.url
        fetch(grassPokemonUrl)
        .then(resp =>  resp.json())
        .then(json =>{
            let grassPokemon = json.sprites.front_default
            grass.src = grassPokemon
        })
    })

    let randomWater = Math.floor(Math.random() * 32)
    fetch('https://pokeapi.co/api/v2/type/water/')
    .then(resp => resp.json())
    .then(json => {
        let waterPokemonUrl = json.pokemon[randomWater].pokemon.url
        fetch(waterPokemonUrl)
        .then(resp =>  resp.json())
        .then(json =>{
            let waterPokemon = json.sprites.front_default
            water.src = waterPokemon
        })
    })
}

function getComputerChoice() {
    const choices = ['Fire', 'Grass', 'Water']
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

function win(user, comp) {
    userScore++
    userScoreSpan.innerHTML = userScore
    compScoreSpan.innerHTML = compScore
    result.innerHTML = `${user} beats ${comp}. You win!`
}

function lose(user, comp) {
    compScore++
    compScoreSpan.innerHTML = compScore
    userScoreSpan.innerHTML = userScore
    result.innerHTML = `${user} loses to ${comp}. You lost..`
}

function draw(user, comp) { result.innerHTML = `It's a draw`}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "FireWater":
        case "GrassFire":
        case "WaterGrass":
            lose(userChoice, computerChoice)
            break
        case "FireGrass":
        case "GrassWater":
        case "WaterFire":
            win(userChoice, computerChoice)
            break;
        case "FireFire":
        case "GrassGrass":
        case "WaterWater":
            draw(userChoice, computerChoice)
            break;
    }
}

function main(params) {
    fire.addEventListener('click', ()=> { game('Fire') })
    
    grass.addEventListener('click', ()=> { game('Grass') })
    
    water.addEventListener('click', ()=> { game('Water') })

    restartBtn.addEventListener('click', ()=> {
        compScoreSpan.innerHTML = 0
        userScoreSpan.innerHTML = 0
        userScore = 0
        compScore = 0
        result.innerHTML = "Choose your Pokemon"
        pokemonPic()
    })

    changePokeBtn.addEventListener('click', ()=>{ 
        result.innerHTML = "Choose your Pokemon"
        pokemonPic() 
    })
}

pokemonPic()
main()