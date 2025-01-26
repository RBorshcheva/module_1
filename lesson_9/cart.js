'use strict'

const cart = {
    items: [],
    count: 0,

    //метод возвращает значение свойства totalPrice
    getTotalPrice(){
        return this.calculateItemPrice();
    },

    //Принимает три параметра: название товара цену товара количество товара (опциональный параметр, по умолчанию 1 товар)
//этот метод формирует объект из полученных параметров и добавляет его в свойство items 
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
    add(itemName, itemPrice, itemAmount = 1){
        const newItem = {
            name: itemName, 
            price: itemPrice, 
            amount: itemAmount,
        }
        this.items.push(newItem);
        this.increaseCount(itemAmount);
    },
    //Принимает один параметр(число) Увеличивает свойство count на это число
    increaseCount(num){
        return this.count += num;
    },
    
    //пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice
    calculateItemPrice() {
        return this.items.reduce((acc, item) =>
          acc + (item.price * item.amount), 0);
      },

    //Очищает полностью нашу корзину, возвращает все значения в изначальные
    clear(){
        this.count = 0;
        this.items = [];
    },

    //Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
    //Для проверки работы функционала добавить 3 или более товаров в корзину
    // После вызвать метод print для вывода информации в консоль
    print(){
        console.log(JSON.stringify(this));
        console.log(`Total price: ${this.getTotalPrice()}`);
    },
}
console.log('Тестовые наборы данных');
cart.print();

console.log('Первый товар добавлен');
cart.add('Масло', 100, 3);
cart.print();

console.log('Второй товар добавлен');
cart.add('Хлеб', 50, 10);
cart.print();

console.log('Третий товар добавлен');
cart.add('Сыр', 350, 1);
cart.print();

console.log(`Корзина очещена`);
cart.clear();
cart.print();