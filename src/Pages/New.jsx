import TransactionForm from "../Components/TransactionForm";

function New({ API, stateHelper }) {
  return (
    <div className="New">
      <h2>New</h2>
      <TransactionForm API={API} stateHelper={stateHelper} />
    </div>
  );
}

export default New;
