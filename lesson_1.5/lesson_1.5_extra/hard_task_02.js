'use strict'

// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

const minNum = (num1 , num2) => {
    return `Наименьшее из двух введенных чисел: ${parseInt(num1) <= parseInt(num2) ? parseInt(num1) : parseInt(num2)}`;
}

console.log(minNum(prompt('Введите первое число: '), prompt('Введите второе число: ')));