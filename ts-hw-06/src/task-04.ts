// Получить массив только неактивных пользователей (поле isActive).
import users from './users';

interface IgetInactiveUsers {
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

type getInactiveUsersFn = (users: IgetInactiveUsers[]) => object[];

const getInactiveUsers: getInactiveUsersFn = users => {
  const userName = users.filter(user => !user.isActive);
  return userName;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

export {};
