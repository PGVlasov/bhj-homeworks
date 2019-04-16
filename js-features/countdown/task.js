"use strict";

function countdwn () {

    const timer =  document.getElementById("timer");
    timer.textContent -=1;
    if (timer.textContent<= 0) {
        alert('Вы победили в конкурсе');
        clearInterval(clearTimer);
    }
}
clearInterval (countdown, 1000)