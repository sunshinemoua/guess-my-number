'use strict';

/*
// query.Selector pulls specific ids from html file
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// define secret number before the button declaration
// math.trunc keeps boundary from 1 -20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// addEventListener -> adda listener to HTML element and executes callback
// on 'type' action [ 1st parameter ].. in this case, it is 'click'
// needs function in 2nd parameter to grab the value entered in entrybox on 'click'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    displayMessage('No number!');

    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('You got it!');
    score++;
    displayScore(score);

    // *** CSS STYLING *****
    // changes the background color and width when the guess is correct
    bgColor('#60b347');
    numberWidth('30rem');

    displayNumber(secretNumber);

    // updates the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is higher/lower than number and also manipulates
    // the score depending on how many guesses is used up
  } else if (guess !== secretNumber) {
    if (guess > secretNumber && score > 1) {
      displayMessage('Too high!');
      score--;
      displayScore(score);
    } else if (guess < secretNumber && score > 1) {
      displayMessage('Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You ran out of guesses...');
      displayScore(0);
    }
  }

  // CHALLENGE 1

  /* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    // need to assign new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.score').textContent = score;
    displayScore(score);
    displayMessage('Start guessing...');
    numberWidth('15rem');
    bgColor('#222');
    displayNumber('?');
    document.querySelector('.guess').value = '';
  });
});
