const soundWindow = document.querySelector('#soundWindow')
const musicList = document.querySelector('.musicList')
const songDisplay = document.querySelector('#songDisplay')
const fillBar = document.querySelector('#fill')

let song = new Audio()
let currentSong = 0
let currentSongTitle = ""

document.addEventListener('dblclick', e => {
    if (e.target.id == "soundFolder"){
        soundWindow.style.display = "block"
    }
})