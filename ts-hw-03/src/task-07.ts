// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

interface ITransaction {
  DEPOSIT: string;
  WITHDRAW: string;
}

const Transaction: ITransaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

interface IArrTransactions {
  [key: string]: number | any;
}

interface IAccount {
  balance: number;
  transactions: IArrTransactions[];
  createTransaction(amount: number, type: string): void;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): string;
  getTransactionDetails(id: number): {} | void;
  getTransactionTotal(type: string): string;
}

const account: IAccount = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    let id = this.transactions.length;

    this.transactions.push({ id, amount, type });
  },

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Снятие такой суммы не возможно, недостаточно средств!');
    }

    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  getTransactionDetails(id) {
    const arrTransactions = this.transactions;
    let transaction;

    for (let i = 0; i < arrTransactions.length; i++) {
      if (id >= arrTransactions.length) {
        console.log('Такой транзакции нет!');
      } else if (arrTransactions[i].id === id) {
        transaction = arrTransactions[i];
      }
    }

    return transaction;
  },

  getTransactionTotal(type) {
    const arrTransactions = this.transactions;
    let totalAmount = 0;

    for (let i = 0; i < arrTransactions.length; i++) {
      if (arrTransactions[i].type === type) {
        totalAmount += arrTransactions[i].amount;
      }
    }

    return `Транзакция "${type}" - общая сумма средств: "${totalAmount}".`;
  },
};

account.deposit(3);
account.deposit(4);
account.withdraw(5);
account.withdraw(1);

console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(0));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

export {};
