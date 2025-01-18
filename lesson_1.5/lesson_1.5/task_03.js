'use strict'

// Напишите функцию, которая принимает строку и возвращает обратную строку

const strRevers = (str) => {
    
    return `${str.split("").reverse().join("")}`;
}

console.log(strRevers(prompt('Введите выражение: ')));