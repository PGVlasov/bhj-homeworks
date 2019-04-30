let texts = document.querySelectorAll("has-tooltip")
let toolTip = document.querySelector('.tooltip')
let tooltipActive = document.querySelector('.tooltip_active');

for (let text of texts)  {
    text.addEventListener('click', showAdvice);
}

toolTip.addEventListener('click', () => toolTip.classList.remove('tooltip_active'));

function showAdvice(e) {

    e.preventDefault();

    if (tooltipActive) {
        tooltipActive.classList.remove('tooltip_active');
    }

    toolTip.classList.add('tooltip_active');
    toolTip.innerText = event.target.title;
    toolTip.style.top = event.target.getBoundingClientRect().top + 20 + 'px';
    toolTip.style.left = event.target.getBoundingClientRect().left + 'px';
}

