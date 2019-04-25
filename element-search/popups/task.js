"use strict"

let modalMain = document.querySelector('#modal_main');
let modalClose = document.querySelectorAll('div.modal__close');
let modalSuccess =  document.querySelector('.show-success');
let showSuccess = document.querySelector('#modal_success');

modalMain.className = 'modal modal_active';

modalClose[0].onclick = function () {
    modalMain.style.display = 'none';
};

modalSuccess.onclick = function(){
    modalMain.style.display = 'none';
    showSuccess.classList.add('modal_active');
}; 

modalClose[1].onclick = function () {
    modalMain.className = 'modal';
    showSuccess.className = 'modal';
};
