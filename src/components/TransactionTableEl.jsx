import PropTypes from 'prop-types';


export const TransactionTableEl = ({ type, amount, currency }) => {
  return   (<tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </tr>)  
}

TransactionTableEl.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}