/*
 * Примитивные типы
 *  - Объявление типа: number, string, boolean, null и undefined, any и object
 *  - Ошибки:
 *    - присвоение значения другого типа
 *    - переопределение значения
 *  - [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
 *  - Множественные типы с type composition
 */
let age: number = 5;
const name: string = "Mango"

// 💩
let value: any = 10; //  any желательно не использовать - это плохая практика!
value = "Ajax"

let user: object = {}; // общий тип - не использовать.
user = {};

let id: string | number | boolean;

id = 7;
id = "Poly";

console.log(age, name, value, user, id);

export {};