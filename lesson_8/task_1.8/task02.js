'use strict'

//Функция принимает один обязательный параметр это количество элементов в массиве И возвращает массив со случайными числами от одного до 100 включительно;
// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массиваm и n включительно

const randGenMinMax = (num, n, m) => {
    const arrOfRand = [];
    const min = n < m ? n : m;
    const max = n > m ? n : m;

    for (let i = 0; i < num; i++) {

        arrOfRand.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    console.log(arrOfRand);
}

randGenMinMax(parseInt(prompt('Введите количество элементов в массиве: ')), parseInt(prompt('Введите первое значение диапазона: ')), parseInt(prompt('Введите второе значение диапазона: ')));