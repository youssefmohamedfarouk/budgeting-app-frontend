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
      <h2>
        Total:
        <span
          style={{
            color: tempTotal < 0 ? "red" : tempTotal < 300 ? "orange" : "green",
          }}
        >
          ${tempTotal.toFixed(2)}
        </span>
      </h2>
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
