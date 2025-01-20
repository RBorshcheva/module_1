'use strict'

//функция принимает в параметрах 2 массива
//Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
    let newArr = [...arr1];

    for (let i = 0; i < arr2.length; i++) {
        newArr.splice(newArr.indexOf(arr2[i]), 1);
    }
    console.log(`TASK 1: ${newArr}`);
}

filter(allStudents, failedStudents);