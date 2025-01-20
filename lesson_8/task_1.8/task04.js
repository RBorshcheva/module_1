'use strict'

// Необходимо написать функцию, которая принимает 2 параметра n и m
// И возвращает массив с високосными годами в диапазоне между n и m


const LeapYearArr = (n, m) => {
    const arrOfYears = [];
    const min = Math.abs(n) < Math.abs(m) ? Math.abs(n) : Math.abs(m);
    const max = Math.abs(n) > Math.abs(m) ? Math.abs(n) : Math.abs(m);

    for (let i = min; i <= max; i++) {
        if (i % 400 === 0 || i % 4 === 0 && i % 100 !== 0) {
            arrOfYears.push(i);
        }
    }
    console.log(arrOfYears);
}

LeapYearArr(parseInt(prompt('Введите первое значение года: ')), parseInt(prompt('Введите второе значение года: ')));