const el = document.getElementById('world');
const text = 'Hailing from 1 the land of sheep and kiwis (New Zealand), I am a San Francisco-based 1 Full-Stack developer, Creator and Collaborator. Currently seeking a user-focused Creative Technologist / Front-End Developer role. Fancy a collaboration or interested in chatting? Reach out!';
const textArr = text.split('');

function drawWorld(){
  el.innerHTML = '';
  textArr.forEach(char => {
    if (char === '1') {
      el.innerHTML += '<div class="cherry"><img src="images/cherry.png"></div>';
    } 
    else if (char === ' ') {
      el.innerHTML += '<div class="space"></div>';
    }
    else {
      el.innerHTML += `<div class="world-text">${char}</div>`;
    }
  })
}
drawWorld();