"use strict"

let rotators = document.querySelectorAll('.rotator');

setInterval(function () {

    for (let rotator of rotators) {

        let randomText = random(0, rotator.children.length - 1);

        for (let element of rotator.children) {
            element.classList.remove('rotator__case_active');
            rotator.children[randomText].classList.add('rotator__case_active');
        }
    }
}, 1000);

function random(min, max) {
    return min + Math.round(Math.random() * (max - min));
}