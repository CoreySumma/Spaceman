// Keys(grab element with DOM) = [Q, W, E, R, T, Y, U, I, O, P, 
//                                  A, S, D, F, G, H, J, K, L
//                                     Z, X, C, V, B, N, M ]

/*----- constants -----*/
const wordBank = ['Rocket', 'Galaxy', 'Android', 'Space Corey', 'Super Nova'];

//split into array once chosen



/*----- app's state (variables) -----*/
let letterInput;//Input of letter that was guessed
let wordAppear;//Which part of the word to unhide if correct
let lives;//How many tries left
let word = [];






/*----- cached element references -----*/
const wordEl = document.getElementById('word');
const lifeEl = document.getElementById('life');
const lettersUsedEl = document.getElementById('lettersUsed');
const guessButtonEl = document.getElementById('guessButton');
const playAgainEl = document.getElementById('playAgain');





/*----- event listeners -----*/




/*----- functions -----*/
function getRandomWord() {
    const rndWord = Math.floor(Math.random() * wordBank.length);
    return wordBank[rndWord];
}
