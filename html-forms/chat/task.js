"use strict"

const chatWiget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');
const date = new Date().getHours() + ':' + new Date().getMinutes();

const botMeseges = [
    'Кто тут?',
    'я занят',
    'К сожалению  все операторы сейчас заняты! Не пишите нам больше!',
    'Вы не купили не одного товара, что б так с нами разговаривать!',
    'И чё?',
    'Мы не работаем!',
    'Где ваша совесть?',
];



chatWiget.addEventListener('click', showChat);
chatWidgetInput.addEventListener("change", sendMessage);

function showChat(event) {
    chatWiget.classList.add('chat-widget_active');
}


function sendMessage(event) {
    
    chatWidgetMessages.innerHTML += `
                          <div class="message message_client">
                            <div class="message__time">${date}</div>
                            <div class="message__text">
                              ${event.target.value}
                            </div>
                          </div>
                        `;

    event.target.value = '';

    botAnswers(botMeseges);
}

function botAnswers (answer) {

    const random = Math.floor(Math.random() * (answer.length))

    return chatWidgetMessages.innerHTML += `
                          <div class="message">
                          <div class="message__time">${date}</div>
                            <div class="message__text">
                              ${answer[random]}
                            </div>
                          </div>
                        `;

}

