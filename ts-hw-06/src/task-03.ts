// Получить массив имен пользователей по полу (поле gender).
import users from './users';

interface IgetUsersWithGender {
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

type getUsersWithGendernFn = (
  users: IgetUsersWithGender[],
  gender: string
) => string[];

const getUsersWithGender: getUsersWithGendernFn = (users, gender) => {
  const names = users
    .filter(user => user.gender === gender)
    .map(user => user.name);

  return names;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

export {};
