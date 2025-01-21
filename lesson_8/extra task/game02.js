'use strict'

// Усовершенствуйте игру, которую написали в game01

// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

const mysteryBot = (n, m) => {
    let max = Math.max(n, m);
    let min = Math.min(n, m);

    //рандомное число в диапазоне, введенном пользователем (включая мин и макс)
    const secret = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('secret: ', secret);
    let predArr = [];
    let tryCount = 0;

    //вычисление количества попыток, немного не поняла условие насчет 50 и 100 (конкретно для 50 и 100 или в целом для диапазона, большего чем 50 чисел)
    min == 50 && max == 100 ? tryCount = 15 : tryCount = Math.round((max - min + 1) * 0.3);

    console.log('tryCount: ', tryCount);

    while (tryCount > predArr.length){
        
        let num = prompt(`Введите число от ${min} до ${max}: `);

        //проверка на нажатие Отмены
        if (num === null || num === '') {
            return;
        }
        //проверка на НЕ число
        while (isNaN(num)) {
            num = parseInt(prompt('Вы ввели не число! Введите число: '));
        }
        num = parseInt(num);

        //добавление числа в массив, если такого числа еще не было
        if (!predArr.includes(num)){
            predArr.push(num);
        } else {
            num = parseInt(prompt(`Вы уже вводили ${num}! Введите другое число: `));
        }

        if (num == secret){
            console.log(`Правильно! Вы отгадали число с ${predArr.length} раза`);
            console.log('predArr: ', predArr);
            return;
        }

        if (num > secret && num !== secret){
            console.log('Меньше!');
        } if (num < secret && num !== secret){
            console.log('Больше!');
        }
    }
    console.log('Игра окончена! Вы использовали все ваши попытки!');
    console.log('predArr: ', predArr);
}

mysteryBot(parseInt(prompt('Введите первое число: ')), parseInt(prompt('Введите второе число: ')));