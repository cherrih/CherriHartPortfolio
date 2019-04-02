const el = document.getElementById('world');
const text = "Hailing from 1 the land of sheep and kiwis (New Zealand), I am a San Francisco-based 1 Full-Stack developer, Creator and Collaborator. Currently seeking a user-focused Creative Technologist / Front-End Developer role. 1 Fancy a collaboration or interested in chatting? Let's talk!";
const textArr = text.split(' ');
let pac;
let pacX = 9;
let pacY = 15.5;

function drawWorld(){
  el.innerHTML = '<div id="pac"><img src="images/pac.png"></div>';
  textArr.forEach(word => {
    if (word === '1') {
      el.innerHTML += '<div class="cherry"><img src="images/cherry.png"></div><div class="space"></div>';
    } else {
      let divString = '<div class="world-text">';
      charArr = word.split('');
      charArr.forEach(char => {
        divString += `<span class="world-char">${char}</span>`;
      })
      divString += '</div>';
      el.innerHTML += divString + '<div class="space"></div>';
    }
  }) 
  pac = document.getElementById('pac'); 
  pac.style.left = `${pacX}vw`;
  pac.style.top = `${pacY}vh`;
}
drawWorld();



document.onkeydown = function(e) {
  // move pac left
  if (e.keyCode === 37) {
    pacX -= 1;
    pac.style.left = `${pacX}vw`;
  }
  // move pac right
  if (e.keyCode === 39) {
    pacX += 1;
    pac.style.left = `${pacX}vw`;
  }
  // move pac up
  if (e.keyCode === 38) {
    pacY -= 2;
    pac.style.top = `${pacY}vh`;
  }
  // move pac down
  if (e.keyCode === 40) {
    pacY += 2;
    pac.style.top = `${pacY}vh`;
  }
}