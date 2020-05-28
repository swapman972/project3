//open and close sound folder
document.addEventListener('dblclick', e => {
    if (e.target.id == "soundFolder"){
        soundWindow.style.display = "block"
    }
})
document.addEventListener('click', e => {
    if(e.target.id == "closeSounds"){
        soundWindow.style.display = "none"
    }
})

//loading up audios
let randomSound = {
    airhorn: "./app/assets/sounds/airhorn.mp3",
    anotherOne: "./app/assets/sounds/another-one.mp3",
    bruh: "./app/assets/sounds/bruh.mp3",
    codec: "./app/assets/sounds/codec.mp3",
    crickets: "./app/assets/sounds/crickets.mp3",
    dun: "./app/assets/sounds/dun-dun.mp3",
    hadouken: "./app/assets/sounds/hadouken.mp3",
    mario: "./app/assets/sounds/its-me-mario.mp3",
    coin: "./app/assets/sounds/mario-coin.mp3",
    up: "./app/assets/sounds/mario-1up.mp3",
    MGS: "./app/assets/sounds/metalgearsolid.mp3",
    ohNo: "./app/assets/sounds/oh-no.mp3"
}

//function to assign audio to button
let soundStart = new Audio()
const soundWindow = document.getElementById('soundWindow')
function playSound(params) {
    soundStart.src = randomSound[params]
    soundStart.play()
}

//event listener to trigger audio
soundWindow.addEventListener('click', (e)=>{
    if(e.target.className === "bruit"){
        playSound(e.target.id)
    }
})
