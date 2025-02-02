const crashSound = new Audio('./sounds/crash.mp3');
const kickBassSound = new Audio('./sounds/kick-bass.mp3');
const snareSound = new Audio('./sounds/snare.mp3');
const tom1Sound = new Audio('./sounds/tom-1.mp3');
const tom2Sound = new Audio('./sounds/tom-2.mp3');
const tom3Sound = new Audio('./sounds/tom-3.mp3');
const tom4Sound = new Audio('./sounds/tom-4.mp3');

document.addEventListener('keypress', (event) => {
  playSound(event.key);
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const key = event.target.classList[0];
    playSound(key);
  });
});

function playSound(key) {
  switch (key) {
    case 'w':
      crashSound.currentTime = 0;
      crashSound.play();
      break;
    case 'a':
      kickBassSound.currentTime = 0;
      kickBassSound.play();
      break;
    case 's':
      snareSound.currentTime = 0;
      snareSound.play();
      break;
    case 'd':
      tom1Sound.currentTime = 0;
      tom1Sound.play();
      break;
    case 'j':
      tom2Sound.currentTime = 0;
      tom2Sound.play();
      break;
    case 'k':
      tom3Sound.currentTime = 0;
      tom3Sound.play();
      break;
    case 'l':
      tom4Sound.currentTime = 0;
      tom4Sound.play();
  }
}
