const musicWindow = document.querySelector('#musicWindow')
const musicList = document.querySelector('.musicList')
const songDisplay = document.querySelector('#songDisplay')
const fillBar = document.querySelector('#fill')

let song = new Audio()
let currentSong = 0
let currentSongTitle = ""

document.addEventListener('dblclick', e => {
    if (e.target.id == "musicFolder"){
        musicWindow.style.display = "block"
    }else if(e.target.dataset.id == "musicTrack"){
        currentSong = e.target.dataset.track
        currentSongTitle = e.target.textContent
        playSong()
    }
})

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

const playSong = () => {
    song.src = songs[currentSong]
    songDisplay.textContent = currentSongTitle
    song.play()
}

const playPause = () => {
    const playPauseBtn = document.querySelector('#play-pause')
    if (song.paused){
        song.play()
        playPauseBtn.textContent = "❚❚"
    } else if (song.play){
        song.pause()
        playPauseBtn.textContent = "▶"
    }
}

/*PREVIOUS-NEXT*/
document.addEventListener('click', e => {
    if(e.target.id == "previousSong"){
        currentSong = currentSong - 1
        currentSongTitle = document.querySelector(`[data-track = "${currentSong}"]`).textContent
        playSong()
    }else if(e.target.id == "nextSong"){
        currentSong = currentSong + 1
        currentSongTitle = document.querySelector(`[data-track = "${currentSong}"]`).textContent
        playSong()
    }
})


song.addEventListener('timeupdate', function(){
    const position = song.currentTime / song.duration
    fillBar.style.width = position * 100 + "%"
})
