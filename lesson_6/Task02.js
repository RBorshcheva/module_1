'use strict'

//Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, а в ином случае false.

const isPrime = (x) => {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return `Число не является простым`
    }
    return `Число ${x} является простым`
}

console.log(isPrime(prompt('Введите число: ')));