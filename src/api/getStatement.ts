import fetch from "isomorphic-unfetch";
import { Statement } from "../interfaces/Statement";

const getStatement = async (): Promise<Statement> => {
  const response = await fetch('https://realbank.com/statement');
  const { transactions } = await response.json();

  return {
    statementRecords: transactions
  };
}

export default getStatement;
