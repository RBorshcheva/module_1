'use strict'

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.

const calculate = (sum, count, promo) => {
    let newSum = sum;
    
    if (count > 10){
        newSum *= 0.97;
    };
    if (newSum > 30000){
        newSum -= (newSum - 30000) * 0.85;
    };
    if (promo === 'METHED'){
        newSum *= 0.9;
    };
    if (promo === 'G3H2Z1' && newSum > 2000){
        newSum -= 500;
    };
    return `К оплате: ${newSum} рублей`;
}

console.log(calculate(prompt('Введите сумму покупки: '), prompt('Введите количество товаров в корзине: '), prompt('Введите промокод: ')));