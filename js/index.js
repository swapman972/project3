document.addEventListener('DOMContentLoaded', () => {
    login()
})

const login = () => {
    const loginId = document.getElementById('loginForm')
    loginId.addEventListener('submit', e => {
            if (e.target.id == 'loginForm'){
            e.target.username.value = ""
            const loginScreen = document.getElementById('loginScreen')
            loginScreen.style.display = "none"
            const x = document.getElementById("loginSound")
            x.volume = 0.2
            x.play()
        }
    })  
}

document.addEventListener('click', e => {
    const notesWindow = document.getElementById('notesWindow')
    if (e.target.id == "systemApple" && e.target.dataset.id == "hide"){
        e.target.dataset.id = "show"
        const appleIcon = document.getElementById("logOut").style.display = "block"
    }else if (e.target.id == "systemApple" && e.target.dataset.id == "show"){
        e.target.dataset.id = "hide"
        const appleIcon = document.getElementById("logOut").style.display = "none"
    }else if(e.target.id == "logOutBtn"){
        e.target.parentElement.dataset.id = "hide"
        e.target.parentElement.style.display = "none"
        const loginScreen = document.getElementById('loginScreen')  
        loginScreen.style.zIndex = 25
        loginScreen.style.display = "block"
    }else if (e.target.dataset.id == "closed"){
      e.target.dataset.id = "open"
      document.getElementById("mySidebar").style.transform = "translateX(-100%)"
    }else if (e.target.dataset.id == "open"){
      e.target.dataset.id = "closed"
      document.getElementById("mySidebar").style.transform = "translateX(0)"
    }else if (e.target.id == "closeX"){
        notesWindow.style.display = "none"
    }else if(e.target.id == "appNotes"){
        notesWindow.style.display = "block"
    }
})

const displayWidgets = () => {
    
}


const divOpen1 = () => {
    
    
}