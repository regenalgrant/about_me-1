'use strict';

var userScore = 0;
//opening question about users name

var userName = prompt('What is your name?');
console.log('User\'s name: ' + userName);
alert('Hi, ' + userName + '!\nAre you ready to play a fun guessing game?\nLet\'s get started!');

//question 1 about my hair color
var hairColor = prompt('Do I have blonde hair?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Do I have blonde hair?');
function countErrors() {
if (hairColor === 'yes' || hairColor === 'y') {
  alert('Correct! I have had blonde hair for my whole life. Most of my family is blonde haired as well.');
  console.log('User\'s answer: ' + hairColor);
  userScore += 1;
} else if (hairColor === 'no' || hairColor === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + hairColor + '\nMy hair color actually is blonde.');
  console.log('User\'s answer: ' + hairColor);

} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');

}
}
countErrors();
//question 2 about my hometown
var hometown = prompt('Is my hometown Bellingham, WA?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my hometown Bellingham, WA?');
function question_2 () {
if (hometown === 'no' || hometown === 'n') {
  alert('Correct!\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);
   userScore += 1;
} else if (hometown === 'yes' || hometown === 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + hometown + '\nMy hometown is actually Olympia WA. I moved to Bellingham after graduating from college.');
  console.log('User\'s answer: ' + hometown);

} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');

}
}
question_2 ();

//question 3 about my previous job
var previousJob = prompt('My previous job was in construction?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: My previous job was in construction?');
function question_3 () {
if (previousJob === 'no' || previousJob === 'n') {
  alert('Correct!\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);
   userScore += 1;
} else if (previousJob === 'yes' || previousJob === 'y') {
  alert('Sorry, that\'s incorrect. You answered ' + previousJob + '\nMy previous job was in marketing for a software company called Faithlife.');
  console.log('User\'s answer: ' + previousJob);

} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');

}
}
question_3 ();

//question 4 about my favorite baseball team
var favBaseballTeam = prompt('Is my favorite baseball team the Seattle Mariners?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my favorite baseball team the Seattle Mariners?');
function question_4 () {
if (favBaseballTeam === 'yes' || favBaseballTeam === 'y') {
  alert('Correct! I have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);
   userScore += 1;
} else if (favBaseballTeam === 'no' || favBaseballTeam === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + favBaseballTeam + '\nI have been a huge Seattle Mariners fan since I was a little kid playing t-ball.');
  console.log('User\'s answer: ' + favBaseballTeam);

} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');

}
}
question_4 ();
//question 5 about my nickname
var myNickName = prompt('Is my nickname Jonny?\nPlease answer "yes" or "no"').toLowerCase();
console.log('Question: Is my nickname Jonny?');

function question_5 () {

if (myNickName === 'yes' || myNickName === 'y') {
  alert('Correct! I have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);
 userScore += 1;
} else if (myNickName === 'no' || myNickName === 'n') {
  alert('Sorry, that\'s incorrect. You answered ' + myNickName + '\nI have gone by the nickname "Jonny" since 2nd grade.');
  console.log('User\'s answer: ' + myNickName);

} else {
  alert('Please only answer questions with "yes" or "no"');
  console.log('User answer did not contain a "yes" or "no"');

}
}
question_5 ();

//question 6 guess how many years I played baseball
var randomNumber = Math.floor(Math.random() * 20) + 1; //had done work with random numbers previously but had to consult http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript to jog my memory
console.log('Random number generated for question 6: ' + randomNumber);

function question_6 () {

for (var i = 0; i < 4; i++) {
  var yearsPlaying = parseFloat(prompt('How many years did I play baseball?\nPlease provide a number between 0 and 20.'));
  var remainingGuesses = 4 - i;
  var currentGuess = i + 1;
  if (yearsPlaying === randomNumber) {
    alert('Great guess! That is correct. I played baseball for ' + randomNumber + ' years');
    console.log('User\'s guess: ' + yearsPlaying + '\nGuessed correctly on try ' + currentGuess + ' of 4');
    userScore += 1;
    break;
  } else if (yearsPlaying > randomNumber) {
    alert('That\'s too HIGH. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
    console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try ' + currentGuess + ' of 4');

  } else {
    alert('That\'s too LOW. Guess again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
    console.log('User\'s guess: ' + yearsPlaying + '\nGuessed incorrectly on try ' + currentGuess + ' of 4');

  }
}
if (yearsPlaying === 0) {
  alert('Sorry, you didn\'t guess the right number. The right number was ' + randomNumber);
}
}
question_6();

//question 7 what are my favorite things
var myFavoriteThings = ['backcountry skiing', 'hanging out with friends', 'hiking', 'rock climbing', 'running', 'playing board games', 'watching classic sitcoms', 'kayaking', 'playing video games', 'watching baseball'];
var a = 0;

function question_7() {

while (a < 6) {
  var favoriteThings = prompt('Can you guess one of my favorite things to do in my spare time?');
  favoriteThings = favoriteThings.toLowerCase();
  var foundAnswer = false;
  remainingGuesses = 6 - a;
  currentGuess = a + 1;
  for (var i = 0; i < myFavoriteThings.length; i++) {
    if (myFavoriteThings[i] === favoriteThings) {
      foundAnswer = true;
    }
  }
  if (foundAnswer === true) {
    alert('Nicely done!\n' + favoriteThings + ' is one of my favorite things to do.');
    console.log('User\'s guess: ' + favoriteThings + '\nGuessed correctly on try ' + currentGuess + ' of 6');
     userScore += 1;
    break;
  } else {
    console.log('User\'s guess: ' + favoriteThings + '\nGuessed incorrectly on try ' + currentGuess + ' of 6');
    alert('You guessed incorrectly. Try again!\nYou have ' + (remainingGuesses -= 1) + ' more tries.');
  }

  a++;
}
}
question_7 ();

//Results


console.log('User\'s final score: ' + userScore + ' out of 7');
function results (){
if (userScore >= 6) {
  alert(userName + ', Your final score was ' + userScore + ' out of 7.\nGood work! You really know me well or are really good at guessing.' );
} else if (userScore >= 4) {
  alert(userName + ', Your final score was ' + userScore + ' out of 7.\nGood work! You seem to know a bit about me.');
} else {
  alert(userName + ', Your final score was ' + userScore + ' out of 7.\nI think we should hangout sometime because you don\'t know very much about me');
}
}
results ();
