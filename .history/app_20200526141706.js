/* 
GAME FUNCTION:
 - Player must guess a number between min and max
 - Player gets a certein amount of guesses
 - Notify player of guesses remaining
 - Notify the player of the correct answer if loose
 - Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
