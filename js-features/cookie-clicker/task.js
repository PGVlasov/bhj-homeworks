"use strict";

const counter = document.getElementById("clicker__counter");
const clicker = document.getElementById("cookie"); 

cookie.onclick = function () {
    counter.innerText++;
    const click = counter.innerText;

    if (click % 2 === 0) {
        cookie.width = 150;
    } else {
        cookie.width = 300;
    }
};