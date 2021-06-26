'use strict';

function noName() {
    userName = prompt('Вы не представились. Как к вам обращаться?', '');
    if (!userName) noName();
}

let userName = prompt('Перед тем, как мы начнем, напишите ваше имя', '');
// let userName = 'admin';

if (userName === null || userName.trim() === "") noName();

let phrase = ['Что ж, мы начинаем!', 'Верно!', 'Молодец!', `Так держать, ${userName}`, `Великолепно!`];

let question1 = 'Начнем с вопроса попроще.<br> 2 + 2 * 2 = ?';
let question2 = 'Что ж, это было несложно.<br> Следующий вопрос: <br> Сколько всего континентов на Земле?';
let question3 = `Всего 6 континентов: Северная и Южная америка, <br>
Евразия, Африка, Австралия и Антарктида.<br><br>
Переходим к более сложным вопросам:<br>
Какая фигура в шахматах завершает комбинацию "мат Легаля?"`;
let question4 = `Последняя задача:<br>
В 9-этажном доме есть лифт.<br>
На первом этаже живет 2 человека,<br>
на втором - 4 человека, на третьем - 8 человек<br>
и так далее..<br>
Какая кнопка в лифте этого дома нажимается чаще других?`;
let question5 = `Поздравляем, ${userName}, вы ответили на все вопросы!`;
let questions = [question1, question2, question3, question4, question5];
let qLength = questions.length;

let rightAnswers = 0;

let values = ['готов', '6', '6', 'конь', '1'];

let timerId = setTimeout(function check() {
    if (input.value.toLowerCase() === values[0]) {
        alert(phrase.shift());
        values.shift();
        input.value = "";
        quest.innerHTML = questions.shift();
        questCompleted.textContent = `Вопросов пройдено: ${rightAnswers} из ${qLength - 1}`;
        rightAnswers++;
    }
        timerId = setTimeout(check, 200);
        if (questions.length === 0) {
            clearTimeout(timerId);
            input.outerHTML = '<h2>Ураа</h2>';
        }
}, 1000);