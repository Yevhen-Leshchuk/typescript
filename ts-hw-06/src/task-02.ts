// Получить массив объектов пользователей по цвету глаз(поле eyeColor).
import users from './users';

interface IgetUsersWithEyeColor {
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

type getUsersWithEyeColorFn = (
  users: IgetUsersWithEyeColor[],
  color: string
) => object[];

const getUsersWithEyeColor: getUsersWithEyeColorFn = (users, color) => {
  const userByEyes = users.filter(user => user.eyeColor === color);
  return userByEyes;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

export {};
