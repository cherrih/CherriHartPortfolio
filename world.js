const el = document.getElementById('world');
const text = "Hailing from 1 the land of sheep and kiwis (New Zealand), I am a San Francisco-based 1 Full-Stack developer, Creator and Collaborator. Currently seeking a user-focused Creative Technologist / Front-End Developer role. 1 Fancy a collaboration or interested in chatting? Let's talk!";
const textArr = text.split(' ');

function drawWorld(){
  el.innerHTML = '<div class="pac"><img src="images/pac.png"></div>';
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
}
drawWorld();