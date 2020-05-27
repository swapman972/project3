// OPEN-CLOSE FUNCTIONALITY
document.addEventListener('click', e => {
    if(e.target.id == "appHangman"){
        gameReset()
        hangmanWindow.style.display = "block"
        playIntro()
    }else if(e.target.id == "closeStopTrump"){
        hangmanWindow.style.display = "none"
    }
})

// CREATE HANGMANG KEYBOARD
const hangmanKeyboard = document.querySelector('#hangmanKeyboard')
hangmanKeyboard.innerHTML =
    `
    <table width="100%" align="center" cellpadding="10" cellspacing="0" border="0">
        <tr>
            <td width="14%" height="18" class="hm-letters" data-id="A">A</td>
            <td width="14%" height="18" class="hm-letters" data-id="B">B</td>
            <td width="14%" height="18" class="hm-letters" data-id="C">C</td>
            <td width="14%" height="18" class="hm-letters" data-id="D">D</td>
            <td width="14%" height="18" class="hm-letters" data-id="E">E</td>
            <td width="14%" height="18" class="hm-letters" data-id="F">F</td>
            <td width="14%" height="18" class="hm-letters" data-id="G">G</td>
        </tr>
        <tr>
            <td width="14%" height="18" class="hm-letters" data-id="H">H</td>
            <td width="14%" height="18" class="hm-letters" data-id="I">I</td>
            <td width="14%" height="18" class="hm-letters" data-id="J">J</td>
            <td width="14%" height="18" class="hm-letters" data-id="K">K</td>
            <td width="14%" height="18" class="hm-letters" data-id="L">L</td>
            <td width="14%" height="18" class="hm-letters" data-id="M">M</td>
            <td width="14%" height="18" class="hm-letters" data-id="N">N</td>
        </tr>
        <tr>
            <td width="14%" height="18" class="hm-letters" data-id="O">O</td>
            <td width="14%" height="18" class="hm-letters" data-id="P">P</td>
            <td width="14%" height="18" class="hm-letters" data-id="Q">Q</td>
            <td width="14%" height="18" class="hm-letters" data-id="R">R</td>
            <td width="14%" height="18" class="hm-letters" data-id="S">S</td>
            <td width="14%" height="18" class="hm-letters" data-id="T">T</td>
            <td width="14%" height="18" class="hm-letters" data-id="U">U</td>
        </tr>
    </table>
    <table width="100%" cellpadding="10" cellspacing="0" border="0">
        <tr>
            <td width="16%" height="18" class="hm-letters" data-id="V">V</td>
            <td width="16%" height="18" class="hm-letters" data-id="W">W</td>
            <td width="16%" height="18" class="hm-letters" data-id="X">X</td>
            <td width="16%" height="18" class="hm-letters" data-id="Y">Y</td>
            <td width="16%" height="18" class="hm-letters" data-id="Z">Z</td>
            <td width="20%" height="18" class="hm-reset" data-id="reset">RESET</td>
        </tr>
    </table>
    `

// ANSWER REPOSITORY
const wordArray = [
    "BANKRUPTCY",
    "MCDONALDS",
    "FACEBOOK",
    "GERRYMANDERING",
    "ELECTORAL",
    "HYDROXYCHLOROQUINE",
    "COHEN",
    "RUSSIA",
    "MELANIA",
    "XENOPHOBIA"
]

// QUESTION REPOSITORY
const phraseArray = [
    "Trump has reportedly dealt with THIS 6 times for his business properties",
    "THIS one of Trump's favorite restaurants",
    "THIS company is said to have been responsible for Donald Trump's election win in 2016",
    "THIS is known to be a powerful tool that helps Republican partisanship",
    "Though not winning the popular vote, THIS 'college' is said to have helped Trump's 2016 election",
    "Trump claims he is taking this medication to combat Covid-19",
    "Convicted felon and Trump's former lawyer from 2006 to 2018",
    "There was an investigation regarding collusion between the Trump team and THIS country",
    "THIS person is said to have plagiarized Michelle Obama's convention speech",
    "The dislike of or prejudice against people from other countries"
]


// NEW GAME VALUES
let answer = ''
let maxWrong = 5
let mistakes = 0
let guessed = []
let wordStatus = null


// NEW GAME WORD
function randomWord() {
    answer = wordArray[Math.floor(Math.random() * wordArray.length)]
}


// ASSOCIATED QUESTION FUNCTIONALITY
function newQuestion() {
    const gameGuess = document.querySelector('#gameHint')
    for (i = 0; i < wordArray.length; i++) {
        if (answer == wordArray[i]){
            gameGuess.textContent = phraseArray[i]
        }
    }
}


// LETTER SELECTING FUNCTIONALITY
document.addEventListener('click', e => {
    if (e.target.className == "hm-letters"){
        let chosenLetter = e.target.textContent
        guessed.push(chosenLetter)
        if (answer.indexOf(chosenLetter) >= 0) {
            guessedWord();
            checkIfGameWon();
        } else if (answer.indexOf(chosenLetter) === -1) {
            mistakes += 1
            updateHangmanPicture()
            checkIfGameWon()
            checkIfGameLost()
        }
        playSoundbite()
    }else if (e.target.className == "hm-reset"){
        gameReset()
    }
})


// GAME WORD UPDATE
function guessedWord()  {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('')
    document.getElementById('gameGuess').innerHTML = wordStatus
}


// UPDATE HANGMAN PICTURE
function updateHangmanPicture() {
    if (mistakes == 1){
        document.querySelector('#gameBody').style.display = "block"
    }else if (mistakes == 2){
        document.querySelector('#gameArm').style.display = "block"
    }else if (mistakes == 3){
        document.querySelector('#gameArm2').style.display = "block"
    }else if (mistakes == 4){
        document.querySelector('#gameHead').style.display = "block"
    }else if (mistakes == 5){
        document.querySelector('#gameTie').style.display = "block"
    }else{
        document.querySelector('#gameBody').style.display = "none"
        document.querySelector('#gameArm2').style.display = "none"
        document.querySelector('#gameArm').style.display = "none"
        document.querySelector('#gameTie').style.display = "none"
        document.querySelector('#gameHead').style.display = "none"
        document.querySelector('#gameFakeNews').style.display = "none"
    }
}


// GAME WON
function checkIfGameWon() {
    if (wordStatus === answer) {
        document.querySelector('#gameJail').style.display = "block"
        document.getElementById('gameHint').innerHTML = 'YOU STOPPED TRUMP!!!'
        setTimeout(gameReset, 5000)
    }
}


// GAME LOST
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.querySelector('#gameFakeNews').style.display = "block"
        document.getElementById('gameHint').innerHTML = 'The answer was: ' + answer
        document.getElementById('gameGuess').innerHTML = 'Trump Wins 🤡'
        setTimeout(playGameEnd, 1)
        setTimeout(gameReset, 4000)
    }
}


// GAME RESET
function gameReset(){
    guessed = []
    mistakes = 0
    updateHangmanPicture()
    randomWord()
    guessedWord()
    newQuestion()
    document.querySelector('#gameJail').style.display = "none"
}


// INITIALIZE GAME
randomWord()
guessedWord()
newQuestion()
updateHangmanPicture()



// AUDIO VARIABLES
let soundbite = new Audio()
let currentSoundbite = 0
const introSoundbite = "./app/assets/sounds/stopTrump/americanDream.mp3"
const endGameSoundbite = "./app/assets/sounds/stopTrump/greatest.mp3"

let soundbites = [
    "./app/assets/sounds/stopTrump/losers.mp3",
    "./app/assets/sounds/stopTrump/nobodysBetter.mp3",
    "./app/assets/sounds/stopTrump/reallyRich.mp3",
    "./app/assets/sounds/stopTrump/makeSense.mp3",
    "./app/assets/sounds/stopTrump/poorPerson.mp3",
    "./app/assets/sounds/stopTrump/fakeNews.mp3",
    "./app/assets/sounds/stopTrump/stupid.mp3"
]

// INTRO SOUNDBITE
const playIntro = () => {
    soundbite.src = introSoundbite
    soundbite.play()
}

// IN GAME SOUNDBITE
const playSoundbite = () => {
    randomNum = Math.floor(Math.random() * 6)
    soundbite.src = soundbites[randomNum]
    soundbite.play()
}

// GAME OVER SOUNDBITE
const playGameEnd = () => {
    soundbite.src = endGameSoundbite
    soundbite.play()
}
