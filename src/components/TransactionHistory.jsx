import { TransactionTableEl } from "components/TransactionTableEl"
import css from 'components/Css/TransactionHistory.module.css'
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>
          {items.map(({ id, type, amount, currency }) => <TransactionTableEl key={id} type={type} amount={amount} currency={currency} />)}
  </tbody>
</table>
}



TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}