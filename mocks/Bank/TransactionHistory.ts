import TransactionRepository from './data/TransactionRepository';
import Transaction from './data/Transaction';
import Clock from './data/Clock';

export default class TransactionHistory implements TransactionRepository {
  private clock: Clock;

  private transactions: Transaction[] = [];

  constructor(clock: Clock) {
    this.clock = clock;
  }

  addDeposit(amount: number): void {
    const depositTransaction = { date: this.clock.todayAsString(), amount };
    this.transactions.push(depositTransaction);
  }

  addWithdrawal(amount: number): void {
    const withdrawalTransaction = { date: this.clock.todayAsString(), amount: -amount };
    this.transactions.push(withdrawalTransaction);
  }

  allTransactions(): Transaction[] {
    return this.transactions;
  }
}
