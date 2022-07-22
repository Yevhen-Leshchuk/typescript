// Получить общую сумму баланса (поле balance) всех пользователей.
import users from './users';

interface IcalculateTotalBalance {
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

type calculateTotalBalanceFn = (users: IcalculateTotalBalance[]) => number;

const calculateTotalBalance: calculateTotalBalanceFn = users => {
  const totalBalance = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
  return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

export {};
