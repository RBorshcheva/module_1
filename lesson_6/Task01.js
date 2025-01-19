'use strict'

//Выведите в консоль таблицу степеней от 1 до 10

const numPow = () => {
    for (let i = 1; i <= 10; i++) {
        console.log('---------------------------');
        for (let y = 1; y <= 10; y++) {
            console.log(`${i}^${y} = ${i ** y}`);         
        }
    }
}

numPow();