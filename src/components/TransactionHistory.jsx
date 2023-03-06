import transactions from '../part/transactions';

export const TransactionHistory = () => {
  return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  <TransactionEl/>
  </tbody>
</table>
}


const TransactionEl = () => {
  return transactions.map((transactions) => {
  return   (<tr key={transactions.id}>
    <td>{transactions.type}</td>
    <td>{transactions.amount}</td>
    <td>{transactions.currency}</td>
    </tr>)  
  })
}


{/* <TransactionHistory items={transactions} />; */}