interface StatementRecord {
  date: string,
  amount: number,
  balance: number
}

export interface Statement {
  statementRecords: StatementRecord[]
}
