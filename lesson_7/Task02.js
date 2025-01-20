'use strict'

// Напишите функцию для получения среднеарифметического значения
// с округлением в меньшую сторону до целого числа

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`TASK 2: ${Math.floor(sum / arr.length)}`);
    
}

getAverageValue(allСashbox);