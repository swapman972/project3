document.addEventListener('DOMContentLoaded', () => {
    login()
    dateTime()
})

const login = () => {
    const loginId = document.getElementById('loginForm')
    loginId.addEventListener('submit', e => {
        let username = e.target.username.value
            if (e.target.id == 'loginForm' && e.target.username.value == 'Jordan'){
            e.target.username.value = ""
            const theme = document.querySelector('#theme')
            theme.href = 'css/jordanTheme.css'
            const loginScreen = document.getElementById('loginScreen')
            loginScreen.style.display = "none"
            const x = document.getElementById("loginSound")
            x.volume = 0.2
            x.play()
            const sysAppName = document.getElementById('systemApplication')
            sysAppName.innerHTML = `Welcome, ${username}!`
        }else if (e.target.id == 'loginForm' && e.target.username.value == 'Stephen'){
            e.target.username.value = ""
            const loginScreen = document.getElementById('loginScreen')
            theme.href = 'css/stephenTheme.css'
            loginScreen.style.display = "none"
            const x = document.getElementById("loginSound")
            x.volume = 0.2
            x.play()
            const sysAppName = document.getElementById('systemApplication')
            sysAppName.innerHTML = `Welcome, ${username}!`
        }else if (e.target.id == 'loginForm' && e.target.username.value == 'Vaporwave'){
            e.target.username.value = ""
            const loginScreen = document.getElementById('loginScreen')
            theme.href = 'css/mattTheme.css'
            loginScreen.style.display = "none"
            const x = document.getElementById("loginSound")
            x.volume = 0.2
            x.play()
            const sysAppName = document.getElementById('systemApplication')
            sysAppName.innerHTML = `Welcome, ${username}!`
        }else {
            alert('Please enter a valid username.')
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
    }else if (e.target.id == "closeNotes"){
        notesWindow.style.display = "none"
    }else if(e.target.id == "appNotes"){
        notesWindow.style.display = "block"
    }else if (e.target.id == "closeMusic"){
        musicWindow.style.display = "none"
    }else if(e.target.id == "appPokedex"){
        pokedexWindow.style.display = "block"
    }else if(e.target.id == "closePokedex"){
        pokedexWindow.style.display = "none"
    }else if(e.target.id == "appHangman"){
        gameReset()
        hangmanWindow.style.display = "block"
        playIntro()
    }else if(e.target.id == "closeStopTrump"){
        hangmanWindow.style.display = "none"
    }else if(e.target.id == "soundFolder"){
        soundWindow.style.display = "block"
    }else if(e.target.id == "closeSounds"){
        soundWindow.style.display = "none"
    }else if(e.target.id == "RPS"){
        rockPaperScissorWindow.style.display = "block"
    }else if(e.target.id == "closeRPS"){
        rockPaperScissorWindow.style.display = "none"
    }
})

const dateTime = () => {
    const date = new Date()
    const weekday = { 
        timeZone: "America/New_York", 
        hour12: true,
        weekday: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric'
    }
    const monthDay = { 
        timeZone: "America/New_York", 
        hour12: true,
        // weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric'
    }

    const time = { 
        timeZone: "America/New_York", 
        hour12: true,
        weekday: 'short',
        // // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
	}

    const timeDisplay = document.querySelector('#date-time').innerHTML = 
    `${date.toLocaleString('en-US', time)}`

    const dateDisplay = document.querySelector('#date-month').innerHTML = 
    `
    ${date.toLocaleString('en-US', weekday)}, <br>
    ${date.toLocaleString('en-US', monthDay)}
    `
}


const systemAppName = () => {
    
    
}