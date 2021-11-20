import React, {useState} from 'react';
import postTransaction from "../api/postTransaction";
import "setimmediate";


const TransactionWriter = () => {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("");


  const depositTransaction = () => {
    postTransaction({action: "DEPOSIT", amount} );
  }

  const withdrawTransaction = () => {
    postTransaction({action: "WITHDRAW", amount} );
  }


  const handleSubmit = (e: any) => {
    setAmount("");
    e.preventDefault();
  }

  return (
    <div className="w-1/2 grid justify-items-start my-20">
    <form className="justify-self-center" onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount" type="text" placeholder="Amount"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
            name="amount"
          />
        </label>
      <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        name="deposit"
        onClick={() => {
          depositTransaction();
        }}
      >
        Deposit
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        name="withdraw"
        onClick={() => {
          withdrawTransaction();
        }}
      >
        Withdraw
      </button>
      </div>
    </form>
    </div>
  )
}
export default TransactionWriter

