let boxHeat = document.getElementById('Box-heat');
// let spaceGame = document.querySelector('.Game-container');
let spaceGame = document.getElementById('site-game');

boxHeat.addEventListener('click', boxClicked);
// boxHeat.style.left = 1;
// spaceGame.addEventListener('click', spaceClicked);

let levelGame = 0;
let x = 0;
let y = 0;
let spaceGameWidth = spaceGame.offsetWidth;
let spaceGameHeight = spaceGame.offsetHeight;
let boxWidth = boxHeat.offsetWidth;
let boxHeight = boxHeat.offsetHeight;

let maxSpaceWidth = spaceGameWidth - boxWidth;
let maxSpaceHeight = spaceGameHeight - boxHeight;

function boxClicked() {
  //   x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  positionRandom();
  boxHeat.style.left = x;
  boxHeat.style.top = y;
  return (levelGame += 1);
}

function positionRandom() {
  x = Math.floor(Math.random() * (maxSpaceWidth - 0 + 1) + 0);
  y = Math.floor(Math.random() * (maxSpaceHeight - 0 + 1) + 0);
  return x, y;
}

// function spaceClicked() {
//   alert('This is out');
// }
