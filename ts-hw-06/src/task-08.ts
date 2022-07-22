// Массив имен всех пользователей у которых есть друг с указанным именем.
import users from './users';

interface IgetUsersWithFriend {
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

type getUsersWithFriendFn = (
  users: IgetUsersWithFriend[],
  friendName: string
) => string[];

const getUsersWithFriend: getUsersWithFriendFn = (users, friendName) => {
  const userNames = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return userNames;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

export {};
