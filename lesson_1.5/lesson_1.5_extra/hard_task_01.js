'use strict'

// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

const numNOD = (num1 , num2) => {
    if (num2 == 0) return num1;
    return numNOD(num2, num1 % num2);
}

console.log(numNOD(prompt('Введите первое число: '), prompt('Введите второе число: ')));