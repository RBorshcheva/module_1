'use strict'

// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {
    arr = arr.map(i => pref + ' ' + i);
    console.log(`TASK 3: ${arr}`);
}

addPrefix(names, 'Mr');