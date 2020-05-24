const musicWindow = document.querySelector('#musicWindow')
const musicList = document.querySelector('.musicList')
document.addEventListener('dblclick', e => {
    if (e.target.id == "musicFolder"){
        musicWindow.style.display = "block"
    }
})