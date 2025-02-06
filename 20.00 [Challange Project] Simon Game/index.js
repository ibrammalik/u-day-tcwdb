/**
 * TODO:
 * - Add event listener click to button
 * - Create pattern randomly with Math.random()
 * - Store the created pattern in an array
 * - The length of pattern is based on the current level eg. level 5 = patter length 5
 * - Level up if player can memorize the current level pattern
 * - When level start play pattern from start to the end
 * - Game over when player click wrong pattern
 *
 * Data Needed:
 * - Simon Pattern array (number: 1-4)
 * - Player Patter array (number: 1-4)
 *
 * Level Logic:
 * - Each level start push random number (1-4) to Simon Pattern array
 * - Play the pattern from pattern array
 * - After simon pattern end, start event listener
 * - When player click compare Simon Pattern and Player Pattern array
 * - If Correct, Level Up
 *
 * Game Over Logic:
 * - Store player clicked pattern in array
 * - Store pattern array that must followed by player
 * - In event listener, each time player click compare
 *   pattern array and player clicked pattern array
 *   at the same position index.
 * - If not same, Game over.
 */
// button order [ green, red, yellow, blue]
const buttonIndex = {
  green: 0,
  red: 1,
  yellow: 2,
  blue: 3,
};
const sounds = [
  new Audio('./sounds/green.mp3'),
  new Audio('./sounds/red.mp3'),
  new Audio('./sounds/yellow.mp3'),
  new Audio('./sounds/blue.mp3'),
];
const wrongSounds = new Audio('./sounds/wrong.mp3');
let buttonsElement = [];
let simonPattern = [];
let playerPattern = [];
let level = 0;
let playerCanPush = false;
let gameStarted = false;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function lightUpButton(button) {
  const sound = new Audio(`./sounds/${button.id}.mp3`);
  sound.play();
  $(button).addClass('pressed');
  setTimeout(() => {
    $(button).removeClass('pressed');
  }, 200);
}

$(document).ready(() => {
  $(document).on('keydown', () => {
    if (gameStarted) return;
    newGame();
  });

  buttonsElement = $('.btn');
  buttonsElement.on('click', handleUserInput);
});

function newGame() {
  gameStarted = true;
  simonPattern = [];
  playerPattern = [];
  level = 0;
  nextLevel();
}

function nextLevel() {
  playerCanPush = false;
  playerPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  const randomNumber0to3 = Math.floor(Math.random() * 4);
  simonPattern.push(randomNumber0to3);
  playSimonSequences();
}

async function playSimonSequences() {
  // show button sequences
  await delay(2000);
  for (let i = 0; i < simonPattern.length; i++) {
    lightUpButton(buttonsElement[simonPattern[i]]);
    await delay(1000);
  }

  // after sequences end, user can push button
  // and the function handleUserInput will check player sequences
  playerCanPush = true;
}

function handleUserInput() {
  if (!playerCanPush) return;

  // Check answer
  playerPattern.push(buttonIndex[this.id]);
  const patternIndex = playerPattern.length - 1;

  // if the answer is wrong = game over
  if (simonPattern[patternIndex] !== playerPattern[patternIndex]) {
    gameOver();
    return;
  } else if (simonPattern.length === playerPattern.length) {
    nextLevel();
  }

  // Animate and play sound
  lightUpButton(this);
}

function gameOver() {
  playerCanPush = false;
  gameStarted = false;
  wrongSounds.play();
  $('#level-title').text('GAME OVER, Press any key to restart');
  $('body').addClass('game-over');
  setTimeout(() => {
    $('body').removeClass('game-over');
  }, 200);
}
