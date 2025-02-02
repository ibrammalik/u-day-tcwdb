const crashSound = new Audio('./sounds/crash.mp3');
const kickBassSound = new Audio('./sounds/kick-bass.mp3');
const snareSound = new Audio('./sounds/snare.mp3');
const tom1Sound = new Audio('./sounds/tom-1.mp3');
const tom2Sound = new Audio('./sounds/tom-2.mp3');
const tom3Sound = new Audio('./sounds/tom-3.mp3');
const tom4Sound = new Audio('./sounds/tom-4.mp3');

document.addEventListener('keydown', (event) => {
  playSound(event.key);
  buttonAnimation(event.key);
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const key = event.target.innerHTML;
    playSound(key);
    buttonAnimation(key);
  });
});

function playSound(key) {
  switch (key) {
    case 'w':
      tom1Sound.currentTime = 0;
      tom1Sound.play();
      break;
    case 'a':
      tom2Sound.currentTime = 0;
      tom2Sound.play();
      break;
    case 's':
      tom3Sound.currentTime = 0;
      tom3Sound.play();
      break;
    case 'd':
      tom4Sound.currentTime = 0;
      tom4Sound.play();
      break;
    case 'j':
      snareSound.currentTime = 0;
      snareSound.play();
      break;
    case 'k':
      crashSound.currentTime = 0;
      crashSound.play();
      break;
    case 'l':
      kickBassSound.currentTime = 0;
      kickBassSound.play();
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector('.' + key);
  activeButton.classList.toggle('pressed');
  setTimeout(() => {
    activeButton.classList.toggle('pressed');
  }, 100);
}
