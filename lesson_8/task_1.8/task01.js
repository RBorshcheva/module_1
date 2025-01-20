'use strict'

//Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;

const randGen = (num) => {
    const arrOfRand = [];

    for (let i = 0; i < num; i++) {
        const min = 1;
        const max = 100;

        arrOfRand.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(arrOfRand);
}

randGen(prompt('Введите количество элементов в массиве: '));