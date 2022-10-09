// Keys = [Q, W, E, R, T, Y, U, I, O, P, 
//           A, S, D, F, G, H, J, K, L
//             Z, X, C, V, B, N, M ]

//Render each letter with box around it
/*----- constants -----*/
const wordIndex = ['Rocket', 'Galaxy', 'Android', 'Space Corey', 'Super Nova'];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//split word into array once chosen



/*----- app's state (variables) -----*/
let tries;//How many tries left
let word;//which word is chosen at random
let letter;//Input of letter that was guessed
let result;// If you guessed the word before tries runs out





/*----- cached element references -----*/
const wordEl = document.getElementById('word');//Where the word appears
// const airEl = document.getElementById('air'); Air tank decreasing
const lettersUsedEl = document.getElementById('lettersUsed');//Show the wrong choice
const guessButtonEl = document.getElementById('keyboard');//clickable keyboard
const playAgainEl = document.getElementById('playAgain');//Reset the game
const keysEl = document.querySelectorAll('keys');


/*----- event listeners -----*/
//EventListener for the buttons -->
//if the onclick button value === any value of the index of the word chosen 
//then append that letter to the correlated [idx] of the chosen work into wordEl (renderWord)
//if it does not match then tries--

//Play again button to re init game





/*----- functions -----*/
function init() {
tries = 10;
word = [''];

render()
function render() {
    renderWord(); //choose a word and display _ for each letter
    renderLetter();//render the letter to each _
    renderTries();//If wrong value selected then tries--
    renderResult()//If player selects letters of word return winner, else return 'You Lose'
}
function renderWord() {
    let word = Math.floor(Math.random() * wordIndex.length);//choose from random word index
    return wordIndex[word];
    for (let i = 0; i < word.length; i++) {
         
}

function renderLetter() {
//     if (keysEl === choice of key value) {
// insert letter on the idx of _
    }


function renderTries() {
if (letter !== word[idx]) {
    return tries --
}
return
}

function renderResult() {
if (tries === 0) {

}

}



// General Flow
// Start game button will randomly choose a word

// Loop through length of the word and add a border for each letter to the 'word' div
//renderWord

// on click letter(s) will loop through the words letters and determine:

                    // If the player clicks the wrong letter then the 
                    //letter will no longer be clickable
                    // and the air count will go down by -1

                    // Otherwise(picks correct letter): the letter will be pushed 
                    // onto it's index correlated div//