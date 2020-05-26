function generateHangmanGame(){
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

    let answer = ''
    let maxWrong = 6
    let mistakes = 0
    let guessed = []
    let wordStatus = null
    
    function randomWord() {
      answer = wordArray[Math.floor(Math.random() * wordArray.length)]
    }
    
    function newQuestion() {
        const gameGuess = document.querySelector('#gameHint')
        if (answer == wordArray[0]){
            gameGuess.textContent = phraseArray[0]
        }else if (answer == wordArray[1]){
            gameGuess.textContent = phraseArray[1]
        }else if (answer == wordArray[2]){
            gameGuess.textContent = phraseArray[2]
        }else if (answer == wordArray[3]){
            gameGuess.textContent = phraseArray[3]
        }else if (answer == wordArray[4]){
            gameGuess.textContent = phraseArray[4]
        }else if (answer == wordArray[5]){
            gameGuess.textContent = phraseArray[5]
        }else if (answer == wordArray[6]){
            gameGuess.textContent = phraseArray[6]
        }else if (answer == wordArray[7]){
            gameGuess.textContent = phraseArray[7]
        }else if (answer == wordArray[8]){
            gameGuess.textContent = phraseArray[8]
        }else if (answer == wordArray[9]){
            gameGuess.textContent = phraseArray[9]
        }else if (answer == wordArray[10]){
            gameGuess.textContent = phraseArray[10]
        }
      }
      
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
                guessed = []
                mistakes = 0
                updateHangmanPicture()
                randomWord()
                guessedWord()
                newQuestion()
        }
    })
    
    function updateHangmanPicture() {
        if (mistakes == 1){
            document.querySelector('#gameBody').style.display = "block"
        }else if (mistakes == 2){
            document.querySelector('#gameArm2').style.display = "block"
        }else if (mistakes == 3){
            document.querySelector('#gameArm').style.display = "block"
        }else if (mistakes == 4){
            document.querySelector('#gameTie').style.display = "block"
        }else if (mistakes == 5){
            document.querySelector('#gameHead').style.display = "block"
        }else if (mistakes == 6){
            document.querySelector('#gameFakeNews').style.display = "block"
        }else{
            document.querySelector('#gameBody').style.display = "none"
            document.querySelector('#gameArm2').style.display = "none"
            document.querySelector('#gameArm').style.display = "none"
            document.querySelector('#gameTie').style.display = "none"
            document.querySelector('#gameHead').style.display = "none"
            document.querySelector('#gameFakeNews').style.display = "none"
        }
    }
    
    function checkIfGameWon() {
      if (wordStatus === answer) {
        document.getElementById('gameHint').innerHTML = 'YOU STOPPED TRUMP!!!'
      }
    }
    
    function checkIfGameLost() {
      if (mistakes === maxWrong) {
        document.getElementById('gameHint').innerHTML = 'The answer was: ' + answer
        document.getElementById('gameGuess').innerHTML = 'Trump Wins 🤡'
        gameOver()
      }
    }
    
    function guessedWord()  {
      wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('')
      document.getElementById('gameGuess').innerHTML = wordStatus
    }
    
    randomWord()
    guessedWord()
    newQuestion()
    updateHangmanPicture()
}


let soundbite = new Audio()

let currentSoundbite = 0

const introSoundbite = "./app/assets/sounds/stopTrump/americanDream.mp3"

let soundbites = [
    "./app/assets/sounds/stopTrump/losers.mp3",
    "./app/assets/sounds/stopTrump/nobodysBetter.mp3",
    "./app/assets/sounds/stopTrump/reallyRich.mp3",
    "./app/assets/sounds/stopTrump/stupid.mp3"
]
const playIntro = () => {
    soundbite.src = introSoundbite
    soundbite.play()
}
const playSoundbite = () => {
    randomNum = Math.floor(Math.random() * 3)
    soundbite.src = soundbites[randomNum]
    soundbite.play()
}
const gameOver = () => {
    soundbite.src = "./app/assets/sounds/stopTrump/greatest.mp3",
    soundbite.play()
}