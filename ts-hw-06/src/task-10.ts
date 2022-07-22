// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
import users from './users';

interface IgetSortedUniqueSkills {
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

type getSortedUniqueSkillsFn = (users: IgetSortedUniqueSkills[]) => string[];

const getSortedUniqueSkills: getSortedUniqueSkillsFn = users => {
  const skills = users
    .reduce((allSkills: string[], skills) => {
      allSkills.push(...skills.skills);

      return allSkills;
    }, [])
    .filter((skills, index, array) => {
      return array.indexOf(skills) === index;
    })
    .sort();
  return skills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
// 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

export {};
