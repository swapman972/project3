//open and close RPS game
document.addEventListener('click', e => {
    if(e.target.id == "RPS"){
        rockPaperScissorWindow.style.display = "block"
    }else if(e.target.id == "closeRPS"){
        rockPaperScissorWindow.style.display = "none"
        compScoreSpan.innerHTML = 0
        userScoreSpan.innerHTML = 0
        userScore = 0
        compScore = 0
        result.innerHTML = "Choose your Pokemon"
        pokemonPic()
    }
})

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
const rsp = document.getElementById('RPS')

let soundForGame = new Audio()

//loading the audio
let gameSound = {
    fire: "./app/assets/sounds/fireSound.mp3",
    grass: "./app/assets/sounds/grassSound.mp3",
    water: "./app/assets/sounds/waterSound.mp3",
    intro: "./app/assets/sounds/pokeIntro.mp3"
}
//function to play intro audio
const playGameIntro = () => {
    soundForGame.src = gameSound["intro"]
    soundForGame.volume = 0.4
    soundForGame.play()
}
rsp.addEventListener("click", ()=>{ playGameIntro()})

//function to play choice audio
const playElementSound = (element) => {
    soundForGame.src = gameSound[element]
    soundForGame.play()
}

//function to display pokemon picture for elements
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

//function to get the computer to pick rock paper or scissor
function getComputerChoice() {
    const choices = ['Fire', 'Grass', 'Water']
    const randomNum = Math.floor(Math.random() * 3)
    return choices[randomNum]
}

//function to change score if win
function win(user, comp) {
    userScore++
    userScoreSpan.innerHTML = userScore
    compScoreSpan.innerHTML = compScore
    result.innerHTML = `${user} beats ${comp}. You win!`
}

//function to change score if lose
function lose(user, comp) {
    compScore++
    compScoreSpan.innerHTML = compScore
    userScoreSpan.innerHTML = userScore
    result.innerHTML = `${user} loses to ${comp}. You lost..`
}

//function to not change score if draw
function draw(user, comp) { result.innerHTML = `It's a draw`}

//function to run a game
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

function main() {
    fire.addEventListener('click', ()=> { 
        soundForGame.volume = 1
        playElementSound("fire")
        game('Fire') 
    })
    grass.addEventListener('click', ()=> { 
        soundForGame.volume = 1
        playElementSound("grass")
        game('Grass') 
    })
    water.addEventListener('click', ()=> { 
        soundForGame.volume = 1
        playElementSound("water")
        game('Water') 
    })

    //restart brand new game without closing
    restartBtn.addEventListener('click', ()=> {
        compScoreSpan.innerHTML = 0
        userScoreSpan.innerHTML = 0
        userScore = 0
        compScore = 0
        result.innerHTML = "Choose your Pokemon"
        pokemonPic()
    })

    //change your pokemon pics
    changePokeBtn.addEventListener('click', ()=>{ 
        result.innerHTML = "Choose your Pokemon"
        pokemonPic() 
    })
}

pokemonPic()
main()
