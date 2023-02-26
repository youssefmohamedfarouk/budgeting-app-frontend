import { Link } from "react-router-dom";

function Transaction({ transaction, index, API }) {
  const currencyFormatter = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  };
  return (
    <tr>
      <td>
        {/* {transaction.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )} */}
        {transaction.date}
      </td>
      <td>
        <a
          href={`/transactions/${transaction.id}`}
          target="_self"
          rel="noreferrer"
        >
          {transaction.item_name}
        </a>
      </td>
      <td>
        {transaction.transaction_type === "Credit" ? (
          <span style={{ color: "green" }}>
            {currencyFormatter(transaction.amount)}
          </span>
        ) : (
          <span style={{ color: "red" }}>
            -{currencyFormatter(transaction.amount)}
          </span>
        )}
      </td>
      <td>
        <Link to={`/transactions/${index}/edit`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;
