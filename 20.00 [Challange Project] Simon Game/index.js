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
const buttons = $('.btn');
const simonPattern = [];
const sounds = [
  new Audio('./sounds/green.mp3'),
  new Audio('./sounds/red.mp3'),
  new Audio('./sounds/yellow.mp3'),
  new Audio('./sounds/blue.mp3'),
];

const buttonIndex = {
  green: 0,
  red: 1,
  yellow: 2,
  blue: 3,
};

let isGameStarted = false;
let playerCanPush = false;
let level = 0;
let playerPattern = [];

$(document).ready(() => {
  $(document).on('keydown', (event) => {
    isGameStarted = true;
    startLevel();
  });
});

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function startLevel() {
  const randomNumber0to3 = Math.floor(Math.random() * 4);
  simonPattern.push(randomNumber0to3);
  level = simonPattern.length;
  playerPattern = [];

  console.log(level);
  $('#level-title').text('Level ' + level);

  // show button sequences
  await timer(1000);
  for (let i = 0; i < simonPattern.length; i++) {
    buttonClickHandler(buttons[simonPattern[i]]);
    await timer(1000);
  }

  // do something when interval is done
  playerCanPush = true;
}

buttons.on('click', function () {
  if (!playerCanPush) return;

  // Check answer
  playerPattern.push(buttonIndex[this.id]);
  const patternIndex = playerPattern.length - 1;

  // if the answer is wrong = game over
  if (simonPattern[patternIndex] !== playerPattern[patternIndex]) {
    isGameStarted = false;
    playerCanPush = false;
    $('#level-title').text('GAME OVER');
  } else if (simonPattern.length === playerPattern.length) {
    playerCanPush = false;
    setTimeout(() => {
      startLevel();
    }, 1000);
  }

  // Animate and play sound
  buttonClickHandler(this);
});

function buttonClickHandler(button) {
  const sound = new Audio(`./sounds/${button.id}.mp3`);
  sound.play();
  $(button).addClass('pressed');
  setTimeout(() => {
    $(button).removeClass('pressed');
  }, 200);
}
