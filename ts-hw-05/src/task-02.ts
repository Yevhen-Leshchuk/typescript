// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст}
// years old and has ${ кол - во фоловеров } followers

interface Params {
  name: string;
  age: number;
  followers: number;
}

interface IUser {
  name: string;
  age: number;
  followers: number;
  getInfo(): void;
}

class User implements IUser {
  public name: string;
  public age: number;
  public followers: number;

  constructor({ name, age, followers }: Params) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango: IUser = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly: IUser = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

export {};
