'use strict'

// Напишите функцию getAveragePriceGoods для получения средней цены товара

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
];

const getAveragePriceGoods = (arr) => {
    let averPrice = [];
    for (let i = 0; i < arr.length; i++) {
        averPrice.push(arr[i][1] / arr[i][0]);
    }
    console.log(`TASK4: ${averPrice.reduce((a,b)=>a+b, 0).toFixed(2)}`);
}

getAveragePriceGoods(allСashbox);