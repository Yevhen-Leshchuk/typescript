// Получить массив имен всех пользователей (поле name).
import users from './users';

interface IgetUserNames {
  id: string;
  name: string;
  email: string;
  eyeColor: string;
  friends: string[];
  isActive: boolean;
  balance: number;
  skills: string[];
  gender: string;
  age: number;
}

type getUserNamesFn = (users: IgetUserNames[]) => string[];

const getUserNames: getUserNamesFn = users => {
  const userName = users.map(user => user.name);
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

export {};
