const poolTitle = document.getElementById('poll__title');
const poolAnswer = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === 4 && xhr.status === 200) {

        const data = JSON.parse(xhr.responseText).data;
        poolTitle.innerText = data.title;

        for (const answer of data.answers) {

            const button = `<button class="poll__answer">${answer}</button>`;

            poolAnswer.insertAdjacentHTML('beforeend', button);
        }

        const answerButtons = document.querySelectorAll('.poll__answer');
        
        for (const answerButton of answerButtons) {
            answerButton.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            });
        }
    }
})