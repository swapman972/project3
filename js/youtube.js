// YOUTUBE ICON AND WINDOW FUNCTIONALITY
document.addEventListener('click', e => {
    if (e.target.id == "appYoutube"){
        youtubeWindow.style.display = "block"
    }else if (e.target.id == "closeYoutube"){
        youtubeWindow.style.display = "none"
    }
})
