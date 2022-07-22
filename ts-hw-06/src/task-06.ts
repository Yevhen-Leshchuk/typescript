// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
import users from './users';

interface IgetUsersWithAge {
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

type getUsersWithAgeFn = (
  users: IgetUsersWithAge[],
  min: number,
  max: number
) => object[];

const getUsersWithAge: getUsersWithAgeFn = (users, min, max) => {
  const sortUsersByAge = users.filter(user => user.age > min && user.age < max);
  return sortUsersByAge;
};
//a.age - b.age
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

export {};
