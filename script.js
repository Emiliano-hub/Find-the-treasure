let spaceGame = document.getElementById('site-game');
let boxHot = document.getElementById('Box-hot');
let text = document.getElementById('Indicator-text');
let textContainer = document.getElementById('Text-container');

spaceGame.addEventListener('click', spaceClicked);
let levelGame = 0;
let p = 0;
let q = 0;

let spaceGameWidth = spaceGame.offsetWidth;
let spaceGameHeight = spaceGame.offsetHeight;
let boxWidth = boxHot.offsetWidth;
let boxHeight = boxHot.offsetHeight;

let maxSpaceWidth = spaceGameWidth - boxWidth;
let maxSpaceHeight = spaceGameHeight - boxHeight;

function boxClicked() {
  positionRandom();
  boxHot.style.left = x;
  boxHot.style.top = y;
  alert('Congratulation you found the treasure');
  return (levelGame += 1);
}

function positionRandom() {
  x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  return x, y;
}

let classNames = ['Very-hot', 'Hot', 'Warm', 'Cold', 'Very-cold'];

function spaceClicked(e) {
  for (let i = 0; i < classNames.length; i++) {
    text.classList.remove(classNames[i]);
  }

  textContainer.style.display = 'inline';

  p = e.clientX;
  q = e.clientY;
  Xbox = boxHot.offsetLeft;
  Ybox = boxHot.offsetTop;

  catX = p - Xbox;
  catY = q - Ybox;

  z = Math.sqrt(catY ** 2 + catX ** 2);

  if (z <= 50) {
    boxClicked();
  }

  if (z <= 100 && z > 50) {
    text.classList.add('Very-hot');
    text.innerHTML = 'VERY HOT';
  }

  if (z <= 200 && z > 100) {
    text.classList.add('Hot');
    text.innerHTML = 'HOT';
  }

  if (z <= 300 && z > 200) {
    text.classList.add('Warm');
    text.innerHTML = 'WARM';
  }

  if (z <= 500 && z > 300) {
    text.classList.add('Cold');
    text.innerHTML = 'COLD';
  }

  if (z > 500) {
    text.classList.add('Very-cold');
    text.innerHTML = 'VERY COLD';
  }
}
