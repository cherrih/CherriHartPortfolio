const el = document.getElementById('world');
const text = 
  ["2 Hailing from 1 the land of",
  "sheep and kiwis (New Zealand),", 
  "I am a San Francisco-based 1", 
  "Full-Stack developer, Creator and",
  "Collaborator. 1 Currently seeking a", 
  "user-focused Creative Technologist /", 
  "Front-End Developer role. 1", 
  "Fancy a collaboration or interested", 
  "in chatting? Let's talk!"];

  
const textMatrix = [];
function drawMatrix(){
  text.forEach(line => {
    textMatrix.push(line.split(''))
  });
}
drawMatrix();
let pac;
let pacX = 0;
let pacY = 0;

function drawWorld(){
  console.log('DRAWING')
  el.innerHTML = '<div></div>';
  textMatrix.forEach(row =>{
    row.forEach(char => {
      if (char === '1') {
        el.innerHTML += '<div class="cherry"><img src="images/cherry.png"></div><div class="space"></div>';
      } else if (char === '2') {
        el.innerHTML += '<div class="space"></div><div id="pac"><img src="images/pac.png"></div><div class="space"></div>';
      } else if (char === ' ' || char === '3') {
        el.innerHTML += '<div class="space"></div>';
      } else {
        el.innerHTML +=`<div class="world-char">${char}</div>`;
      }        
    })
    el.innerHTML += '<br/>'
  })
}
drawWorld();

document.onkeydown = function(e) {
  // move pac left
  if (e.keyCode === 37 && pacX > 0) {
    console.log('left');
    textMatrix[pacY][pacX] = '3';
    pacX -= 1;
    textMatrix[pacY][pacX] = '2';
    drawWorld();
  }
  // move pac right
  if (e.keyCode === 39 && pacX < textMatrix[pacY].length - 1) {
    console.log('right')

    textMatrix[pacY][pacX] = '3';
    pacX += 1;
    textMatrix[pacY][pacX] = '2';
    drawWorld();
  }
  // move pac up 
  if (e.keyCode === 38 && pacY > 0) {
    textMatrix[pacY][pacX] = '3';
    pacY -= 1;
    textMatrix[pacY][pacX] = '2';
    drawWorld();
  }
  // move pac down
  if (e.keyCode === 40 && pacY < 8) {
    textMatrix[pacY][pacX] = '3';
    pacY += 1;
    textMatrix[pacY][pacX] = '2';
    drawWorld();
  }
}
