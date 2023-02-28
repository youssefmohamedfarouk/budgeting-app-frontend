import TransactionDetails from "../Components/TransactionDetails";

function Show({ API, stateHelper }) {
  return (
    <div className="Show">
      <h2>Show</h2>
      <TransactionDetails API={API} stateHelper={stateHelper} />
    </div>
  );
}

export default Show;
