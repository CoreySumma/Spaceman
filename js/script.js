/*----- Constants -----*/
const wordBank = ['PLANET', 'ASTEROID', 'UFO', 'COMET', 'STAR', 'SUN', 'ANDROMEDA', 'SUPERNOVA'];




/*----- App's State (variables) -----*/
let correctChoice; //Correct letter chosen/clicked 
let wrongChoice; //Incorrect letter chosen/clicked
let tries;//How many wrong clicks available
let word;//Represents the word chosen for the game
let result;// Represents the W or L result of the game 
let guess; //Where the guess appears (_) for each letter




/*----- Cached Element References -----*/
const wordEl = document.getElementById('word');//Where the word appears
const wrongLetterEl = document.getElementById('wrongLetter');//Show the wrong choice
const guessButtonEl = document.getElementById('keyboard');//clickable keyboard
const playAgainEl = document.getElementById('playAgain');//Reset the game   
const spacemanEl = document.querySelector('img');


/*----- Event Listeners -----*/
//EventListener for the buttons -->
document.getElementById('keyboard').addEventListener('click', handleChoice);
playAgainEl.addEventListener('click', init);




function handleChoice(evt) {  //the function for event listener
    if (evt.target.tagName !== 'BUTTON' || //guards
        correctChoice.includes(evt.target.value.toUpperCase()) ||
        wrongChoice.includes(evt.target.value.toUpperCase())
    ) return;

    if (word.includes(evt.target.value.toUpperCase())) {
        correctChoice.push(evt.target.value.toUpperCase())
        word.forEach(function (letter, idx) {
            if (evt.target.value.toUpperCase() === letter) guess[idx] = letter;
        })
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
    wrongLetterEl.style.visibility = 'visible';
    spacemanEl.style.visibility = 'visible';
    guessButtonEl.style.visibility = 'visible';
    playAgainEl.style.visibility = 'hidden';
    guess = []
    tries = 6;
    word = pickWord();
    correctChoice = [];
    wrongChoice = [];
    result = null;
    word.forEach(function () {
        guess.push('_');
    })
    render()
}
//Render the games state
function render() {
    renderWord();
    renderIMG();
    renderResult();
}


function pickWord() {
    let chosenWord = Math.floor(Math.random() * wordBank.length);//choose from random word index
    word = wordBank[chosenWord];//assign word to random word
    return word.split('');//return an array of the word
}

function renderWord() {
    wordEl.textContent = guess.join('');//this will return the word 
}

function checkResult() {
    if (guess.join('') === word.join('')) return 'W';
    if (tries === 0) return 'L';
    return null
}

function renderResult() {
    if (result === 'W') {
        document.querySelector('#result').innerHTML = 'You Saved him!';
        playAgainEl.style.visibility = 'visible';
        guessButtonEl.style.visibility = 'hidden';
        wrongLetterEl.style.visibility = 'hidden';

    } else if (result === 'L') {
        document.querySelector('#result').innerHTML = 'You Lose';
        playAgainEl.style.visibility = 'visible';
        guessButtonEl.style.visibility = 'hidden';
        spacemanEl.style.visibility = 'hidden';
        wrongLetterEl.style.visibility = 'hidden';
    } else {
        document.querySelector('#result').innerHTML = `You Have ${tries} Liters of Oxygen`
        let wrongLetter = wrongChoice.join('  ')
        wrongLetterEl.innerHTML = `Wasted Breath:${wrongLetter}`;
    }
}

function renderIMG() {
    spacemanEl.src = `pseudocode/IMG/spaceman-${wrongChoice.length}.png`;
}

