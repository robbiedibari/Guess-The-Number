'use strict';
/*
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = "Correct Number!";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// Random Number function 
let generateRandomNumber = function(){
    return Math.trunc(Math.random() * 20) + 1;
}

// Display Message 
const dispayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;


document.querySelector('.again').addEventListener('click', function () {
  secretNumber =generateRandomNumber();
  score = 20;
  displayMesssage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    dispayMessage('🛑 No Number!');

    // When player Win.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dispayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
        
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispayMessage('🤯 Game Overr!');
    }
  } else if (guess == secretNumber) {
    dispayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
  }
});



