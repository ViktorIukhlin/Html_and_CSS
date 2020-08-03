'use strict';

const boardParent = document.querySelector('.board'),
    scan = document.querySelector('.scan');
let counter;

function render() {
    for(let i = 0;i < 9;i++){
        boardParent.innerHTML += `<div data-section="${i+1}" class='board__section'></div>`;
    }    
}

render();
const allSectionsOfBoard = document.querySelectorAll('.board__section');

allSectionsOfBoard.forEach(section => {
    section.addEventListener('click', (e) => {
        section.classList.add('player');
        console.log(e);
    },  {once:true});
});
scan.addEventListener
 


// if(e.toElement.className == "board__section player"){
//     break;
//  }