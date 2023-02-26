import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ transactions }) {
  let tempTotal = 0;

  transactions.map((transaction) => {
    if (transaction.transaction_type === "Purchase") {
      tempTotal -= Number(transaction.amount);
    } else {
      tempTotal += Number(transaction.amount);
    }
  });

  return (
    <nav>
      <h1>
        <Link to="/">DOSH</Link>
      </h1>
      <div>Total: ${tempTotal.toFixed(2)}</div>
      <div>
        <button>
          <Link to="/transactions">Transactions</Link>
        </button>
        <button>
          <Link to="/transactions/new">New Transaction</Link>
        </button>
      </div>
    </nav>
  );
}
