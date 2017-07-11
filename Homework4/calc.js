'use strict';

var x = alert("Калькулятор")
var num1 = prompt("Введите первое значение:");
var num2 = prompt("Введите второе значение:");
var operation = prompt("Введите символ математической операции (+,-,*,/):");

if (operation === '+'){
    alert("Результат: "+ (+num1 + +num2));
} else if (operation === '-'){
    alert("Результат: "+(num1 - num2));
} else if (operation === '*'){
    alert("Результат: "+(num1 * num2));
} else if (operation === '/' && num2 !== 0){
    alert("Результат: "+(num1 / num2));
} else if (operation === '/' && num2 === 0){
    alert("Результат: На ноль делить нельзя");
} else{
    alert("Введены неверные данные")
}
