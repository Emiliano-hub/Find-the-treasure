let spaceGame = document.getElementById('site-game');
let boxHeat = document.getElementById('Box-heat');
let text = document.getElementById('Indicator-text');
let textContainer = document.getElementById('Text-container');

spaceGame.addEventListener('click', spaceClicked);
let levelGame = 0;
let p = 0;
let q = 0;

let spaceGameWidth = spaceGame.offsetWidth;
let spaceGameHeight = spaceGame.offsetHeight;
let boxWidth = boxHeat.offsetWidth;
let boxHeight = boxHeat.offsetHeight;

let maxSpaceWidth = spaceGameWidth - boxWidth;
let maxSpaceHeight = spaceGameHeight - boxHeight;

function boxClicked() {
  positionRandom();
  boxHeat.style.left = x;
  boxHeat.style.top = y;
  alert('Congratulation you found the treasure');
  return (levelGame += 1);
}

function positionRandom() {
  x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  return x, y;
}

let classNames = ['Very-heat', 'Heat', 'Warm', 'Cold', 'Very-cold'];

function spaceClicked(e) {
  for (let i = 0; i < classNames.length; i++) {
    text.classList.remove(classNames[i]);
  }

  textContainer.style.display = 'inline';

  p = e.clientX;
  q = e.clientY;
  Xbox = boxHeat.offsetLeft;
  Ybox = boxHeat.offsetTop;

  catX = p - Xbox;
  catY = q - Ybox;

  z = Math.sqrt(catY ** 2 + catX ** 2);

  if (z <= 50) {
    boxClicked();
  }

  if (z <= 100 && z > 50) {
    text.classList.add('Very-heat');
    text.innerHTML = 'VERY HEAT';
  }

  if (z <= 200 && z > 100) {
    text.classList.add('Heat');
    text.innerHTML = 'HEAT';
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
