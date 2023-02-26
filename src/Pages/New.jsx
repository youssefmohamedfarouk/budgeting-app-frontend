import TransactionForm from "../Components/TransactionForm";

function New({ API, transactions, setTransactions }) {
  return (
    <div className="New">
      <h2>New</h2>
      <TransactionForm
        API={API}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default New;
