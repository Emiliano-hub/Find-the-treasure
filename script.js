let spaceGame = document.getElementById('site-game');
let boxHot = document.getElementById('Box-hot');
let text = document.getElementById('Indicator-text');
let textContainer = document.getElementById('Text-container');
let presentation = document.getElementById('Principal-site');

let buttonStart = document.getElementById('buttom-Play');

/* Listeners */
buttonStart.addEventListener('click', start);
spaceGame.addEventListener('click', spaceClicked);
/* Listeners */

/* Variables */
let levelGame = 0;
let p = 0;
let q = 0;
/* Variables */

/* Addjusment sizes */
let spaceGameWidth = spaceGame.offsetWidth;
let spaceGameHeight = spaceGame.offsetHeight;
let boxWidth = boxHot.offsetWidth;
let boxHeight = boxHot.offsetHeight;

let maxSpaceWidth = spaceGameWidth - boxWidth;
let maxSpaceHeight = spaceGameHeight - boxHeight;
/* Addjusment sizes */

/* Start-Game */
spaceGame.style.display = 'none';

function start() {
  boxClicked();
  spaceGame.style.display = 'flex';
}

/* ADDING CLASS */
{
  // class Game {
  //   constructor() {
  //     this.initialize();
  //   }
  //   initialize() {
  //     this.activeEvents();
  //     this.boxClicked();
  //   }
  //   activeEvents() {
  //     this.spaceGame.addEventListener('click', this.spaceClicked);
  //   }
  //   boxClicked() {
  //     this.positionRandom();
  //     this.boxHot.style.left = this.x;
  //     this.boxHot.style.top = this.y;
  //     if (levelGame > 0) {
  //       alert('Congratulation you found the treasure');
  //     }
  //     return (levelGame += 1);
  //   }
  //   positionRandom() {
  //     this.x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  //     this.y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  //     return this.x, this.y;
  //   }
  //   spaceClicked(e) {
  //     for (let i = 0; i < classNames.length; i++) {
  //       text.classList.remove(classNames[i]);
  //     }
  //     textContainer.style.display = 'inline';
  //     this.p = e.clientX;
  //     this.q = e.clientY;
  //     this.Xbox = boxHot.offsetLeft;
  //     this.Ybox = boxHot.offsetTop;
  //     this.catX = p - Xbox;
  //     this.catY = q - Ybox;
  //     this.z = Math.sqrt(catY ** 2 + catX ** 2);
  //     if (z <= 50) {
  //       boxClicked();
  //     }
  //     if (z <= 100 && z > 50) {
  //       text.classList.add('Very-hot');
  //       text.innerHTML = 'VERY HOT';
  //     }
  //     if (z <= 200 && z > 100) {
  //       text.classList.add('Hot');
  //       text.innerHTML = 'HOT';
  //     }
  //     if (z <= 300 && z > 200) {
  //       text.classList.add('Warm');
  //       text.innerHTML = 'WARM';
  //     }
  //     if (z <= 500 && z > 300) {
  //       text.classList.add('Cold');
  //       text.innerHTML = 'COLD';
  //     }
  //     if (z > 500) {
  //       text.classList.add('Very-cold');
  //       text.innerHTML = 'VERY COLD';
  //     }
  //   }
  // }
  // const start = new Game();
}
/* ADDING CLASS */

function boxClicked() {
  positionRandom();
  boxHot.style.left = x + 'px';
  boxHot.style.top = y + 'px';
  if (levelGame > 0) {
    alert('Congratulation you found the treasure');
  }
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
    textContainer.style.display = 'none';
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
