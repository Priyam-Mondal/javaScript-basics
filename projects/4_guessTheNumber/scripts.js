let randomNum = Math.round(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//if user if eligible to play game
if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("please enter a number!");
    }else if(guess < 1 || guess > 100) {
        alert("number range is (1 <number< 100)");
    }else{
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNum) {
        displayMessage(`You guessed it right`);
        endGame();
    }else if(guess < randomNum){
        displayMessage(`Number is TOOO low`);
    }else if(guess > randomNum) {
        displayMessage(`Number is TOOO high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    //add with exsisting html content
    guessSlot.innerText += `${guess}, `;
    numGuess++;
    remaining.innerHTML =  `${11-numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    // useing classList so that, it won't overwrite the existing classes; 
    // instead, it will add the new class (button) to the element.
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame">New Game</h2>`;
    startOver.appendChild(para);
    
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        //reset all variables and fields
        randomNum = Math.round(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML =  `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        //make playGame true for next round
        playGame = true;
    });
}
