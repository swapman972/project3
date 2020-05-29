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
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">A</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">B</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">C</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">D</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">E</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">F</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">G</td>
        </tr>
        <tr>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">H</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">I</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">J</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">K</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">L</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">M</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">N</td>
        </tr>
        <tr>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">O</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">P</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">Q</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">R</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">S</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">T</td>
            <td width="14%" height="18" class="hm-letters" data-id="gameLetter">U</td>
        </tr>
    </table>
    <table width="100%" cellpadding="10" cellspacing="0" border="0">
        <tr>
            <td width="16%" height="18" class="hm-letters" data-id="gameLetter">V</td>
            <td width="16%" height="18" class="hm-letters" data-id="gameLetter">W</td>
            <td width="16%" height="18" class="hm-letters" data-id="gameLetter">X</td>
            <td width="16%" height="18" class="hm-letters" data-id="gameLetter">Y</td>
            <td width="16%" height="18" class="hm-letters" data-id="gameLetter">Z</td>
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
    "XENOPHOBIA",
    "JOHN",
    "MANHATTAN",
    "PELOSI"
]

// QUESTION REPOSITORY
const phraseArray = [
    "Trump has reportedly dealt with THIS 6 times for his business properties",
    "THIS is one of Trump's favorite restaurants",
    "THIS social media company is said to have been responsible for Donald Trump's election win in 2016",
    "THIS is known to be a powerful tool that helps Republican partisanship by manipulating district boundaries",
    "Though not winning the popular vote, THIS body of electors (aka 'college') decided Trump's 2016 election",
    "In May 2020, Trump claimed he was taking THIS medication to prevent contracting Covid-19",
    "THIS convicted felon was Trump's lawyer from 2006 to 2018",
    "There was an investigation regarding collusion between THIS country and the Trump administration",
    "THIS person is said to have plagiarized Michelle Obama's convention speech",
    "The dislike of or prejudice against people from other countries is known as...",
    "Donald Trump's middle name",
    "Donald Trump's birthplace",
    "In February 2020, THIS speaker of the house tore up Trump's state of the union address"
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

    // LETTER SELECTION
    if (e.target.className == "hm-letters"){

        // PUSH GUESSED LETTER INTO GUESSED ARRAY
        let chosenLetter = e.target.textContent
        guessed.push(chosenLetter)

        // SET GUESSED LETTER CSS CLASS TO INVALID
        e.target.className = "hm-letters-used"

        // GAME WON/LOST?
        if (answer.indexOf(chosenLetter) >= 0) {
            guessedWord();
            checkIfGameWon();
        } else if (answer.indexOf(chosenLetter) === -1) {
            mistakes += 1
            updateHangmanPicture()
            checkIfGameWon()
            checkIfGameLost()
        }

        // AUDIO SOUNDBITE FOR EACH GUESS
        playSoundbite()

    // RESET SELECTION
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
        setTimeout(playGameWon, 1)
        setTimeout(gameReset, 4000)
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

    // RESET ALL USED LETTERS
    for (i=0; i < guessed.length; i++){
        const allLetters = Array.from(document.querySelectorAll('[data-id="gameLetter"]'))
        allLetters.forEach(letter => {
            letter.className = "hm-letters"
        })
        
    }
    // CLEAR GUESSED QUEUE AND MISTAKES
    guessed = []
    mistakes = 0

    // RUN NEW GAME
    document.querySelector('#gameJail').style.display = "none"
    randomWord()
    guessedWord()
    newQuestion()
    updateHangmanPicture()

}

// INITIALIZE GAME
randomWord()
guessedWord()
newQuestion()
updateHangmanPicture()



  /***********************************/
 /******* [ AUDIO FUNCTIONS ] *******/
/***********************************/

// AUDIO VARIABLES
let soundbite = new Audio()
let currentSoundbite = 0
const introSoundbite = "./app/assets/sounds/stopTrump/americanDream.mp3"
const wonGameSoundbite = "./app/assets/sounds/stopTrump/jail.mp3"
const endGameSoundbite = "./app/assets/sounds/stopTrump/greatest.mp3"

let soundbites = [
    "./app/assets/sounds/stopTrump/losers.mp3",
    "./app/assets/sounds/stopTrump/nobodysBetter.mp3",
    "./app/assets/sounds/stopTrump/reallyRich.mp3",
    "./app/assets/sounds/stopTrump/makeSense.mp3",
    "./app/assets/sounds/stopTrump/poorPerson.mp3",
    "./app/assets/sounds/stopTrump/fakeNews.mp3",
    "./app/assets/sounds/stopTrump/china.mp3",
    "./app/assets/sounds/stopTrump/didntDoAnything.mp3",
    "./app/assets/sounds/stopTrump/stupid.mp3"
]

// INTRO SOUNDBITE
const playIntro = () => {
    soundbite.src = introSoundbite
    soundbite.play()
}

// IN GAME SOUNDBITE
const playSoundbite = () => {
    randomNum = Math.floor(Math.random() * 8)
    soundbite.src = soundbites[randomNum]
    soundbite.play()
}
// GAME WON SOUNDBITE
const playGameWon = () => {
    soundbite.src = wonGameSoundbite
    soundbite.play()
}

// GAME OVER SOUNDBITE
const playGameEnd = () => {
    soundbite.src = endGameSoundbite
    soundbite.play()
}
