// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
import users from './users';

interface IgetNamesSortedByFriendsCount {
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

type getNamesSortedByFriendsCountFn = (
  users: IgetNamesSortedByFriendsCount[]
) => string[];

const getNamesSortedByFriendsCount: getNamesSortedByFriendsCountFn = users => {
  const names = [...users]
    .sort(
      (prevName, nextName) => prevName.friends.length - nextName.friends.length
    )
    .map(user => user.name);

  return names;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson',
//'Sheree Anthony', 'Ross Vazquez' ]
export {};
