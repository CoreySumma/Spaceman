/*----- constants -----*/
const wordBank = ['PLANET','ASTEROID', 'UFO', 'COMET', 'DROID', 'GALAXY'];




/*----- app's state (variables) -----*/
let userChoice; //Letter chosen/clicked 
let tries;//How many tries left
let word;//Represents the word chosen/displayed
let letter;//Each letter of word 
let result;// If you guessed the word before tries runs out(6)





/*----- cached element references -----*/
const wordEl = document.getElementById('word');//Where the word appears
// const airEl = document.getElementById('air'); Air tank decreasing
const wrongLetterEl = document.getElementById('wrongLetter');//Show the wrong choice
const guessButtonEl = document.getElementById('keyboard');//clickable keyboard
const playAgainEl = document.getElementById('playAgain');//Reset the game
const keysEl = document.querySelectorAll('keys');
const spacemanEl = document.querySelector('img');


/*----- event listeners -----*/
//EventListener for the buttons -->
// document.querySelector('#playAgain').addEventListener('click', init);
document.getElementById('keyboard').addEventListener('click', handleChoice)
// if the onclick button value === any value of the index of the word chosen 
//then append that letter to the correlated [idx] of the chosen work into wordEl (renderWord)
//if it does not match then tries--

//Play again button to re init game

function handleChoice(evt) {  //the function for event listener
    if (evt.target.tagName !== 'BUTTON' || //guards
        userChoice.includes(evt.target.value.toUpperCase())
    ) return;
    userChoice.push(evt.target.value.toUpperCase())
    if (word.includes(evt.target.value.toUpperCase())) {
        render();
    } else {
        tries -= 1;
        render()
    }
}



/*----- functions -----*/
init();
function init() {
tries = 6;
word = pickWord();
userChoice = [];
word.forEach(function() {
    let letterEl = document.createElement('div');
    wordEl.appendChild(letterEl);
})
render()
}
console.log(word)
console.log(wordEl)
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

function renderResult() {
   if (tries === 0) {
    document.querySelector('#result').innerHTML = 'You Lose';
    guessButtonEl.style.visibility = 'hidden';
   }}

function renderIMG() {
    // const imgPath = `pseudocode/IMG/spaceman-${userChoice.length}.png`;
    // console.log(imgPath);
    spacemanEl.src = `pseudocode/IMG/spaceman-${userChoice.length}.png`;
}




// for (let i = 0; i < userChoice.length; i++)
// letter = userChoice[i];
// if (userChoice[i].length > tries) {
// document.querySelector('#result').innerHTML = 'He is dead, try again';
