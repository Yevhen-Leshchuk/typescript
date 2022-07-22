// Получить пользоваля (не массив) по email (поле email, он уникальный).

import users from './users';

interface IgetUserWithEmail {
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

type getUserWithEmailFn = (
  users: IgetUserWithEmail[],
  email: string
) => {} | undefined;

const getUserWithEmail: getUserWithEmailFn = (users, email) => {
  const user = users.find(user => user.email === email);
  return user;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

export {};
