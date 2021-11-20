import React from 'react';
import Layout from '../components/Layout'
import TransactionWriter from '../components/TransactionWriter';
import StatementDisplay from "../components/StatementDisplay";

const AccountPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex">
      <StatementDisplay />
      <TransactionWriter />
    </div>
  </Layout>
)

export default AccountPage
