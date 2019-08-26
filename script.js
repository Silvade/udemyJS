let money = Number.parseInt(prompt("Ваш бюджет на месяц?"));
let time = Date.parse(prompt("Введите дату в формате YYYY-MM-DD"));
let countOfQuestions = 2;
let allExpenceCost = 0;
let daysInMonth = 30;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    moneyPerDay: 0
};


for (let i = 0; i < countOfQuestions; ++i) {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
    let expenseCost = prompt("Во сколько обойдется?");

    if (typeof (expenseItem) === 'string' && typeof (expenseItem) != null && expenseItem != '' && expenseItem.length < 50 &&
        typeof (expenseCost) === 'string' && typeof (expenseCost) != null && expenseCost != '') {
        appData.expenses[expenseItem] = Number.parseInt(expenseCost);
        allExpenceCost += Number.parseInt(expenseCost);
    } else {
        --i;
    }
};

/*
let i = 0;
while (i < countOfQuestions) {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
    let expenseCost = prompt("Во сколько обойдется?");

    if (typeof (expenseItem) === 'string' && typeof (expenseItem) != null && expenseItem != '' && expenseItem.length < 50 &&
        typeof (expenseCost) === 'string' && typeof (expenseCost) != null && expenseCost != '') {
        
        appData.expenses[expenseItem] = Number.parseInt(expenseCost);
        allExpenceCost += Number.parseInt(expenseCost);
        ++i;
    }
}
*/

/*
let i = 0;
do {
    let expenseItem = prompt("Введите обязательную статью расходов в этом месяце");
    let expenseCost = prompt("Во сколько обойдется?");

    if (typeof (expenseItem) === 'string' && typeof (expenseItem) != null && expenseItem != '' && expenseItem.length < 50 &&
        typeof (expenseCost) === 'string' && typeof (expenseCost) != null && expenseCost != '') {

        appData.expenses[expenseItem] = Number.parseInt(expenseCost);
        allExpenceCost += Number.parseInt(expenseCost);
        ++i;
    }
}
while (i < countOfQuestions)
*/

appData.moneyPerDay = ((appData.budget - allExpenceCost) / daysInMonth).toFixed(2);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
