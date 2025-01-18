'use strict'

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
const strModify = (str) => {
    
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

console.log(strModify(prompt('Введите выражение: ')));