'use strict'

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

const convertToRuble = (price) => {
    const euToDoll = 1.2;
    const dollToRubl = 64;
    return price * euToDoll * dollToRubl;
};

console.log(`Стоимость покупки: ${convertToRuble(parseFloat(prompt('Введите стоимость покупки: ')))} рублей`);