'use strict';

let money = Number.parseInt(prompt("Ваш бюджет на месяц?"));
let time = Date.parse(prompt("Введите дату в формате YYYY-MM-DD"));
let countOfQuestions = 2;
let allExpenceCost = 0;
let daysInMonth = 30;
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

for (var i = 0; i < countOfQuestions; ++i) {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
    let expenseCost = Number.parseInt(prompt("Во сколько обойдется?"));
    appData.expenses[i] = expenseItem + " : " + expenseCost;
    allExpenceCost += expenseCost;
}

alert("Бюджет на один день: " + ((appData.moneyData - allExpenceCost) / daysInMonth).toFixed(2));