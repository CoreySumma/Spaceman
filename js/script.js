// Keys = [Q, W, E, R, T, Y, U, I, O, P, 
//           A, S, D, F, G, H, J, K, L
//             Z, X, C, V, B, N, M ]


/*----- constants -----*/
const wordBank = ['CRATE','SLANT', 'TRACE', 'ROAST', 'BEANS', 'ADIEU'];


//split word into array once chosen, maybe map()



/*----- app's state (variables) -----*/
let userChoice; //letter chosen 
let tries;//How many tries left
let word;//which word is chosen at random
let letter;//letter of word 
let result;// If you guessed the word before tries runs out





/*----- cached element references -----*/
const wordEl = document.getElementById('word');//Where the word appears
// const airEl = document.getElementById('air'); Air tank decreasing
const wrongLetterEl = document.getElementById('wrongLetter');//Show the wrong choice
const guessButtonEl = document.getElementById('keyboard');//clickable keyboard
const playAgainEl = document.getElementById('playAgain');//Reset the game
const keysEl = document.querySelectorAll('keys');


/*----- event listeners -----*/
//EventListener for the buttons -->
document.getElementById('keyboard').addEventListener('click', handleChoice)
// if the onclick button value === any value of the index of the word chosen 
//then append that letter to the correlated [idx] of the chosen work into wordEl (renderWord)
//if it does not match then tries--

//Play again button to re init game
function handleChoice(evt) {
    if (evt.target.tagName !== 'BUTTON' || 
        userChoice.includes(evt.target.value.toUpperCase())
    ) return;
    console.log(evt.target.value)
    userChoice.push(evt.target.value.toUpperCase())
    console.log(userChoice);
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
}
 
    
    //display each letter
    // renderTries();//If wrong value selected then tries--
    // renderResult()//If player selects letters of word return winner, else return 'You Lose'

function pickWord() {
    let chosenWord = Math.floor(Math.random() * wordBank.length);//choose from random word index
    let word = wordBank[chosenWord];//assign word to random word
    return word.split('');
}   

function renderWord() {
    let letterEls = [...document.querySelectorAll('#word > div')];
    word.forEach(function(letter, idx) {
        if (userChoice.includes(letter)) {
            letterEls[idx].innerHTML = letter;
        }
    })
}




// function renderChoice() {
// //     if (keysEl === choice of key value) {
// // insert letter on the idx of _
// //or switch it?
//     }


// function renderTries() {
// if (letter !== word[idx]) {
//     return tries --
// }
// return
// }

// function renderResult() {
// if (tries < 0 && guess === word.length) {  //define guess/winner
//     return winner;
// } 

// }

// }



// General Flow
// Start game button will randomly choose a word

// Loop through length of the word and add a border for each letter to the 'word' div
//renderWord

// on click letter(s) will loop through the words letters and determine:

                    // If the player clicks the wrong letter then the 
                    //letter will no longer be clickable
                    // and the air count will go down by -1

                    // Otherwise(picks correct letter): the letter will be pushed 
                    // onto it's index correlated div