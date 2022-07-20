// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.entries() и for...of

interface IUser {
  name: string;
  age: number;
  hobby: string;
  premium: boolean;
  mood: string;
}

const user: IUser = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  mood: '',
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.entries(user);

for (const [name, value] of keys) {
  console.log(`${name}: ${value}`);
}

export {};
