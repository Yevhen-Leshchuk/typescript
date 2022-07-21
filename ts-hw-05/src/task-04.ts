// Напиши класс StringBuilder. На вход он получает один параметр - строку,
// которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

interface IStringBuilder {
  _value: string;
  get value(): string;
  append(str: string): void;
  prepend(str: string): void;
  pad(str: string): void;
}

class StringBuilder implements IStringBuilder {
  _value: string;

  constructor(_value: string) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  append(str: string) {
    this._value = `${this._value}${str}`;
  }

  prepend(str: string) {
    this._value = `${str}${this._value}`;
  }

  pad(str: string) {
    this._value = `${str}${this._value}${str}`;
  }
}

const builder: IStringBuilder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

export {};
