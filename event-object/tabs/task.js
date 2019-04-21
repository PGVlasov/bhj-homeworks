"use strict"
let tabs = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');
let tabActive;

function changeTabs(){
    tabs.forEach(function(event,i){
        if(event.classList.contains('tab_active')) tabActive = i;
        event.addEventListener('click',function(){
            tabs[tabActive].classList.remove('tab_active');
            tabContent[tabActive].classList.remove('tab__content_active');
            event.classList.add('tab_active');
            tabContent[i].classList.add('tab__content_active');
        
        })
    })
}

changeTabs();

