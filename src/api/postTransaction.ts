import fetch from "isomorphic-unfetch";


const postTransaction = async ({action, amount}: any): Promise<number> => {
  console.log("Action: ", action);
  console.log("Amount: ", amount);
  const response = await fetch(
    'https://realbank.com/transactions', {
      method: 'POST',
      body: JSON.stringify({
        amount,
        action
      })
    });

    return response.status;
}

export default postTransaction;
