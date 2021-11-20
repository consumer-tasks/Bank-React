import {rest} from 'msw';
import Account from './Bank/Account';
import Clock from './Bank/data/Clock';
import StatementPrinter from './Bank/StatementPrinter';
import TransactionHistory from './Bank/TransactionHistory';

const clock: Clock = { todayAsString: () => `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` }
const transactionHistory = new TransactionHistory(clock)
const account = new Account(transactionHistory, new StatementPrinter(() => {}))

export const handlers = [
  rest.post('https://realbank.com/transactions', (req, res, ctx) => {
    const {amount, action } = JSON.parse(req.body as string);
    console.log("Amount: ", amount);
    console.log("Action: ", action);

    switch (action) {
      case 'DEPOSIT':
        account.deposit(parseInt(amount, 10))
        break;
      case 'WITHDRAW':
        account.withdraw(parseInt(amount, 10))
        break;

      default:
        throw new Error(`Action not supported "${action}"`);
    }

    return res(ctx.status(200))
  }),

  rest.get('https://realbank.com/statement', (_req, res, ctx) => {
    let balance = 0;
    const transactions = transactionHistory
      .allTransactions()
      .map(({ date, amount }) => {
        balance += amount;
        return { date, amount, balance };
      })
      .reverse();

    return res(ctx.json({ transactions }));
  })
]
