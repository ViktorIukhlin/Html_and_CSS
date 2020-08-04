'use strict';

const boardParent = document.querySelector('.board'),
    scan = document.querySelector('.scan');
let counter = 0;

function render() {
    for(let i = 0;i < 9;i++){
        boardParent.innerHTML += `<div data-section="${i+1}" class='board__section'></div>`;
    }    
}

render();
const allSectionsOfBoard = document.querySelectorAll('.board__section');

allSectionsOfBoard.forEach(section => {
    section.addEventListener('click', (e) => {
        counter++;
        scan.innerHTML ='';
        scan.innerHTML =`${counter}`;
        section.classList.add('player');
        console.log(e);
    },  {once:true});
});
 


// if(e.toElement.className == "board__section player"){
//     break;
//  }readystatechange