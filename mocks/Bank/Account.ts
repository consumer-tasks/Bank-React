import TransactionRepository from './data/TransactionRepository';
import StatementPrinter from './StatementPrinter';

export default class Account {
  constructor(
    private transactionRepository: TransactionRepository,
    private statementPrinter: StatementPrinter
  ) {}

  public deposit(amount: number): void {
    this.transactionRepository.addDeposit(amount);
  }

  public withdraw(amount: number): void {
    this.transactionRepository.addWithdrawal(amount);
  }

  public printStatement(): void {
    const transactions = this.transactionRepository.allTransactions();
    this.statementPrinter.print(transactions);
  }
}
