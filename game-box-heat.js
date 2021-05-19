let spaceGame = document.getElementById('site-game');
// let siteCold = document.getElementById('Cold');
// let siteWarm = document.getElementById('Warm');
// let siteHeat = document.getElementById('Heat');
let boxHeat = document.getElementById('Box-heat');

boxHeat.addEventListener('click', boxClicked);
spaceGame.addEventListener('click', spaceClicked);

let levelGame = 0;
// let x = 0;
// let y = 0;
let p = 0;
let q = 0;

let spaceGameWidth = spaceGame.offsetWidth;
let spaceGameHeight = spaceGame.offsetHeight;
let boxWidth = boxHeat.offsetWidth;
let boxHeight = boxHeat.offsetHeight;
let Xbox = boxHeat.offsetLeft;
let Ybox = boxHeat.offsetTop;

let maxSpaceWidth = spaceGameWidth - boxWidth;
let maxSpaceHeight = spaceGameHeight - boxHeight;

function boxClicked(e) {
  positionRandom();
  boxHeat.style.left = x;
  boxHeat.style.top = y;
  console.log(e);
  return (levelGame += 1);
}

function positionRandom() {
  x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  return x, y;
}

function spaceClicked(e) {
  p = e.clientX;
  q = e.clientY;
  Xbox = boxHeat.offsetLeft;
  Ybox = boxHeat.offsetTop;

  catX = p - Xbox;
  catY = q - Ybox;

  z = Math.sqrt(catY ** 2 + catX ** 2);

  if (z <= 100) {
    alert('Very heat');
  }

  if (z <= 200 && z > 100) {
    alert('Heat');
  }

  if (z <= 300 && z > 200) {
    alert('Warm');
  }

  if (z <= 500 && z > 300) {
    alert('Frio');
  }

  if (z > 500) {
    alert('Muy frio');
  }
  console.log(Xbox, Ybox);
  return p, q;
}
