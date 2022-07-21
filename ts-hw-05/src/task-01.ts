// Напиши class Account, которая создает объект со свойствами login и email.
// В class добавь метод getInfo(), который выводит в консоль значения полей
// login и email объекта который его вызвал.

interface Params {
  login: string;
  email: string;
}

interface IAccount {
  login: string;
  email: string;
  getInfo(): void;
}

class Account implements IAccount {
  public login: string;
  public email: string;
  constructor({ login, email }: Params) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  }
}

const mango: IAccount = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly: IAccount = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

export {};
