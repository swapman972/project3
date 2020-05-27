document.addEventListener('DOMContentLoaded', () => {
    // ALSO SET DEFER ON SCRIPT TAGS AT THE BOTTOM OF THE HTML
    login()
    dateTime()
})


// SPLASH USER LOGIN SCREEN
const login = () => {

    const loginId = document.getElementById('loginForm')
    loginId.addEventListener('submit', e => {
        e.preventDefault()
        let username = e.target.username.value
        const theme = document.querySelector('#theme')
        fetch('http://localhost:3000/desktops')
        .then(resp => resp.json())
        .then(json => { 
            // JORDAN'S THEME
            if (e.target.id == 'loginForm' && e.target.username.value == json[0].owner){
                e.target.username.value = ""
                theme.href = 'css/jordanTheme.css'
                const weatherWget= document.getElementById('weatherApp')
                
            // MY THEME
            }else if (e.target.id == 'loginForm' && e.target.username.value == json[1].owner){
                e.target.username.value = ""
                const loginScreen = document.getElementById('loginScreen')
                theme.href = 'css/stephenTheme.css'
                
            // VAPORWAVE'S THEME
            }else if (e.target.id == 'loginForm' && e.target.username.value == json[2].owner){
                e.target.username.value = ""
                const loginScreen = document.getElementById('loginScreen')
                theme.href = 'css/mattTheme.css'
                
            // INVALID USERNAME
            }else {
                alert('Please enter a valid username.')
                location.reload()
            }
            
            // HIDE LOGIN SCREEN ON LOGIN
            const loginScreen = document.getElementById('loginScreen')
            loginScreen.style.display = "none"
            
            // PLAY LOGIN SOUND
            const x = document.getElementById("loginSound")
            x.volume = 0.2
            x.play()
            const sysAppName = document.getElementById('systemApplication')
            sysAppName.innerHTML = `Welcome, ${username}!`
        })
    })  
        
}
    
    
// SYSTEM NAVIGATION AND WIDGET APPLICATION FUNCTIONS
document.addEventListener('click', e => {

    // SYSTEM APPLIE ICON 'LOGOUT' FUNCTION
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

    // SYSTEM WIDGET BUTTON 'SHOW/HIDE' FUNCTION
    }else if (e.target.dataset.id == "closed"){
        e.target.dataset.id = "open"
        document.getElementById("mySidebar").style.transform = "translateX(-100%)"
    }else if (e.target.dataset.id == "open"){
        e.target.dataset.id = "closed"
        document.getElementById("mySidebar").style.transform = "translateX(0)"
    }

})


// SYSTEM & WIDGET DATE-TIME VARIABLES
const dateTime = () => {
    const date = new Date()
    const weekday = { 
        timeZone: "America/New_York", 
        hour12: true,
        weekday: 'long',
    }
    const monthDay = { 
        timeZone: "America/New_York", 
        hour12: true,
        month: 'long',
        day: 'numeric',
    }
    const time = { 
        timeZone: "America/New_York", 
        hour12: true,
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
    }
    
    // CONVERTING TIME OUTPUT TO A USABLE STRING FOR DISPLAY 
    const timeDisplay = document.querySelector('#date-time').innerHTML = 
    `${date.toLocaleString('en-US', time)}`

    const dateDisplay = document.querySelector('#date-month').innerHTML = 
    `
    ${date.toLocaleString('en-US', weekday)}, <br>
    ${date.toLocaleString('en-US', monthDay)}
    `
}
