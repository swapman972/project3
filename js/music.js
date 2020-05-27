// GLOBAL VARIABLES
const musicWindow = document.querySelector('#musicWindow')
const musicList = document.querySelector('.musicList')
const songDisplay = document.querySelector('#songDisplay')
const fillBar = document.querySelector('#fill')
// volume visual
const max = document.querySelector('.max')
const midMax = document.querySelector('.midMax')
const mid = document.querySelector('.mid')
const midMin = document.querySelector('.midMin')
const min = document.querySelector('.min')

let song = new Audio()
song.volume = 0.4
midMin.style.backgroundColor = "greenyellow"
min.style.backgroundColor = "#439637"
let currentSong = 0
let currentSongTitle = ""

// MUSIC ICON AND WINDOW FUNCTIONALITY
document.addEventListener('dblclick', e => {
    if (e.target.id == "musicFolder"){
        musicWindow.style.display = "block"
    }else if(e.target.dataset.id == "musicTrack"){
        currentSong = parseInt(e.target.dataset.track)
        currentSongTitle = e.target.textContent
        playSong()
    }
})
document.addEventListener('click', e => {
    if (e.target.id == "closeMusic"){
        musicWindow.style.display = "none"
    }
})

// SONG QUEUE
let songs = [
    "./app/assets/music/☆ＳＥＩＮＷＡＶＥ☆２０００☆.mp3",
    "./app/assets/music/Blank-Banshee_Teen-Pregnancy.mp3",
    "./app/assets/music/ESPRIT-空想-200-Electronica_Play-That-Thing-Again.mp3",
    "./app/assets/music/George-Clanton_Never-Late-Again.mp3",
    "./app/assets/music/Jay-Z_&_Kanye-West_OTIS.mp3",
    "./app/assets/music/Notorious-BIG_Big-Poppa.mp3",
    "./app/assets/music/Notorious-BIG_Juicy.mp3",
    "./app/assets/music/Notorious-BIG_One-More-Chance.mp3",
    "./app/assets/music/Partly 曇った.mp3",
    "./app/assets/music/The-Weeknd_House-of-Balloons .mp3",
    "./app/assets/music/The-Weeknd_Montreal.mp3",
    "./app/assets/music/The-Weeknd_The-Birds-Pt-1.mp3",
    "./app/assets/music/The-Weeknd_Wicked-Games.mp3"
]

// PLAY SONG
const playSong = () => {
    song.src = songs[currentSong]
    songDisplay.textContent = currentSongTitle
    song.play()
}

// PAUSE-PLAY FUNCTIONALITY
const playPause = () => {
    const playPauseBtn = document.querySelector('#play-pause')
    if (song.paused){
        song.play()
        playPauseBtn.innerHTML = "❚❚"
    } else if (song.play){
        song.pause()
        playPauseBtn.innerHTML = "▶"
    }
}

// PREVIOUS-NEXT
document.addEventListener('click', e => {
    if(e.target.id == "previousSong"){
        currentSong = currentSong - 1
        currentSongTitle = document.querySelector(`[data-track = "${currentSong}"]`).textContent
        playSong()
    }else if(e.target.id == "nextSong"){
        currentSong = currentSong + 1
        console.log(currentSong)
        currentSongX = document.querySelector(`[data-track = "${currentSong}"]`)
        currentSongTitle = currentSongX.textContent
        playSong()
    }
})

// TRACK LENGTH TRACKER BAR
song.addEventListener('timeupdate', function(){
    const position = song.currentTime / song.duration
    fillBar.style.width = position * 100 + "%"
})

// VOLUME FUNCTIONALITY
document.addEventListener('click', e => {

    if(e.target.id == "volumeUp" && song.volume < 1.0){
        let volUp = song.volume += 0.2
        let newVolume = Math.round(volUp * 10)
        if(newVolume > 8){
            max.style.backgroundColor = "red"
            midMax.style.backgroundColor = "orange"
            mid.style.backgroundColor = "yellow"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
        }else if(newVolume > 6){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "orange"
            mid.style.backgroundColor = "yellow"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
        }else if(newVolume > 4){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "yellow"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
       }else if(newVolume > 2){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
        }else if(newVolume > 0){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "white"
            min.style.backgroundColor = "#439637"
        }else if(newVolume == 0){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "white"
            min.style.backgroundColor = "white"
        }
    
    }else if(e.target.id == "volumeDown" && song.volume > 0){
        let volDown = song.volume -= 0.2
        let newVolume = Math.round(volDown * 10)
        if(newVolume == 8){
            console.log("hi")
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "orange"
            mid.style.backgroundColor = "yellow"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
        }else if(newVolume == 6){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "yellow"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
       }else if(newVolume == 4){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "greenyellow"
            min.style.backgroundColor = "#439637"
        }else if(newVolume == 2){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "white"
            min.style.backgroundColor = "#439637"
        }else if(newVolume == 0){
            max.style.backgroundColor = "white"
            midMax.style.backgroundColor = "white"
            mid.style.backgroundColor = "white"
            midMin.style.backgroundColor = "white"
            min.style.backgroundColor = "white"
        }
    }
})
// const volumeBar = () => {

// }
