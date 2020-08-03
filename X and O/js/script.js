'use strict';

const boardParent = document.querySelector('.board');

function render() {
    for(let i = 0;i < 9;i++){
        boardParent.innerHTML += `<div data-section="${i+1}" class='board__section'></div>`;
    }    
}

render();
const allSectionsOfBoard = document.querySelectorAll('.board__section');

allSectionsOfBoard.forEach(section => {
    section.addEventListener('click', () => {
        section.classList.add('player');
    },  {once:true});
});


// if(e.toElement.className == "board__section player"){
//     break;
//  }