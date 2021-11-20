import React, {useState, useEffect} from 'react';
import { Statement } from '../interfaces/Statement';
import getStatement from '../api/getStatement';
import {useQuery} from "react-query";

const StatementDisplay = () => {

  const { data: statement = {statementRecords: []} } =
    useQuery('getStatement', getStatement, {
      refetchInterval: 100
    })

  return (
    <div className="w-1/2 bg-blue-100 grid justify-items-start">
    <table className="justify-self-center">
      <thead>
      <tr>
        <th className="bg-blue-100 border text-left px-8 py-4">Date</th>
        <th className="bg-blue-100 border text-left px-8 py-4">Amount</th>
        <th className="bg-blue-100 border text-left px-8 py-4">Balance</th>
      </tr>
      </thead>
      <tbody>
      {statement.statementRecords.map((record) => {
        return (<tr className="table-row" key={`${record.date}-${record.amount}-${record.balance}`}>
          <td className="border px-8 py-4">{record.date}</td>
          <td className="border px-8 py-4">{record.amount}</td>
          <td className="border px-8 py-4">{record.balance}</td>
        </tr>)
      })
      }
    </tbody>
    </table>
    </div>
  )
}
export default StatementDisplay
