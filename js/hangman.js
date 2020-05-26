const wordArray = [
    "Bankruptcy",
    "McDonalds",
    "Facebook",
    "Gerrymandering",
    "Electoral",
    "Hydroxychloroquine",
    "Cohen",
    "Russia",
    "Melania",
    "Xenophobia",
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
    "The dislike of or prejudice against people from other countries",
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
    if (answer == wordArray[0]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[0]
    }else if (answer == wordArray[1]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[1]
    }else if (answer == wordArray[2]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[2]
    }else if (answer == wordArray[3]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[3]
    }else if (answer == wordArray[4]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[4]
    }else if (answer == wordArray[5]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[5]
    }else if (answer == wordArray[6]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[6]
    }else if (answer == wordArray[7]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[7]
    }else if (answer == wordArray[8]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[8]
    }else if (answer == wordArray[9]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[9]
    }else if (answer == wordArray[10]){
        const gameGuess = document.querySelector('#gameHint')
        gameGuess.textContent = phraseArray[10]
    }
    console.log(gameGuess)
  }
  
document.addEventListener('click', e => {
    if (e.target.className == "hm-letters"){
        letter = e.target.textContent
        guessed.push(letter)
        mistakes += 1
        updateHangmanPicture()
        checkIfGameWon()
        checkIfGameLost()
        console.log(guessed)
    }else if (e.target.className == "hm-reset"){
        guessed = []
        mistakes = 0
        updateHangmanPicture()
        randomWord()
        guessedWord()
        console.log(guessed)
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
  }else{
      newQuestion()
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