/*----- constants -----*/
const wordBank = ['PLANET','ASTEROID', 'UFO', 'COMET', 'DROID', 'GALAXY'];




/*----- app's state (variables) -----*/
let userChoice; //Letter chosen/clicked 
let wrongChoice;
let tries;//How many tries left
let word;//Represents the word chosen/displayed
let letter;//Each letter of word 
let result;// If you guessed the word before tries runs out(6)





/*----- cached element references -----*/
const wordEl = document.getElementById('word');//Where the word appears
const wrongLetterEl = document.getElementById('wrongLetter');//Show the wrong choice
const guessButtonEl = document.getElementById('keyboard');//clickable keyboard
const playAgainEl = document.getElementById('playAgain');//Reset the game
const keysEl = document.querySelectorAll('keys');
const spacemanEl = document.querySelector('img');


/*----- event listeners -----*/
//EventListener for the buttons -->
// document.querySelector('#playAgain').addEventListener('click', init);
document.getElementById('keyboard').addEventListener('click', handleChoice);
playAgainEl.addEventListener('click', refreshBoard);
// if the onclick button value === any value of the index of the word chosen 
//then append that letter to the correlated [idx] of the chosen work into wordEl (renderWord)
//if it does not match then tries--

//Play again button to re init game

function handleChoice(evt) {  //the function for event listener
    if (evt.target.tagName !== 'BUTTON' || //guards
        userChoice.includes(evt.target.value.toUpperCase()) ||
        wrongChoice.includes(evt.target.value.toUpperCase())
    ) return;
   if (word.includes(evt.target.value.toUpperCase())) {
        userChoice.push(evt.target.value.toUpperCase())
        result = checkResult();
        render();
        
    } else {
        wrongChoice.push(evt.target.value.toUpperCase())
        tries -= 1;
        result = checkResult();
        render()
    }
}



/*----- functions -----*/
init();
function init() {
playAgainEl.style.visibility = 'hidden';
tries = 6;
word = pickWord();
userChoice = [];
wrongChoice = [];
result = null;
word.forEach(function() {
    let letterEl = document.createElement('div');
    wordEl.appendChild(letterEl);
})
render()
}
// console.log(word)
// console.log(wordEl)
function render() {
    renderWord();
    renderIMG();
    renderResult();
}
 

   
    // renderTries();//If wrong value selected then tries--
    // renderResult()//If player selects letters of word return winner, else return 'You Lose'

function pickWord() {
    let chosenWord = Math.floor(Math.random() * wordBank.length);//choose from random word index
    word = wordBank[chosenWord];//assign word to random word
    return word.split('');//return an array of the word
}   

function renderWord() {
    let letterEls = [...document.querySelectorAll('#word > div')];
    word.forEach(function(letter, idx) {
        if (userChoice.includes(letter)) {
            letterEls[idx].innerHTML = letter;
        }
    })
}
function checkResult() {
    if (userChoice.length === word.length) return 'W';
    if (tries === 0) return 'L';
    return null
}

function renderResult() {
    if (result === 'W') {
        document.querySelector('#result').innerHTML = 'You Saved him';
        playAgainEl.style.visibility = 'visible';
        guessButtonEl.style.visibility = 'hidden';
        spacemanEl.style.visibility = 'hidden';
    } else if (result === 'L') {
        document.querySelector('#result').innerHTML = 'You Lose';
        playAgainEl.style.visibility = 'visible';
        guessButtonEl.style.visibility = 'hidden';
        spacemanEl.style.visibility = 'hidden';
       } else {
            document.querySelector('#result').innerHTML = `You have ${tries} liters of air left`
        }
   }

   function refreshBoard () {
    window.location.reload()
   }

function renderIMG() {
    // const imgPath = `pseudocode/IMG/spaceman-${userChoice.length}.png`;
    // console.log(imgPath);
    spacemanEl.src = `pseudocode/IMG/spaceman-${wrongChoice.length}.png`;
}

