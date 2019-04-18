"use strict";

/*function countdwn () {

    const timer =  document.getElementById("timer");
    timer.textContent -=1;
    if (timer.textContent<= 0) {
        alert('Вы победили в конкурсе');
        clearInterval(clearTimer);
    }
}
clearInterval (countdown, 1000)
*/


let countdwnTime = document.getElementById('timer');

let timer = setInterval(()=>{
    countdwnTime.innerText--;
    if (countdwnTime.innerText == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);
    }