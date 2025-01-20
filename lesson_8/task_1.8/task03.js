'use strict'

//Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;
// 4-ый опциональный параметр это строка:
// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел


const randGenMinMaxType = (num, n, m, type) => {
    const arrOfRand = [];
    const min = n < m ? n : m;
    const max = n > m ? n : m;

    for (let i = 0; i < num; i++) {
        if (type === 'even') {
            let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            randNum % 2 !== 0 ? arrOfRand.push(randNum + 1) : arrOfRand.push(randNum);
        }
        if (type === 'odd') {
            let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
            randNum % 2 !== 0 ? arrOfRand.push(randNum) : arrOfRand.push(randNum + 1);
        }
    }
    console.log(arrOfRand);
}

randGenMinMaxType(parseInt(prompt('Введите количество элементов в массиве: ')), parseInt(prompt('Введите первое значение диапазона: ')), parseInt(prompt('Введите второе значение диапазона: ')), prompt('Введите тип чисел (even или odd): '));