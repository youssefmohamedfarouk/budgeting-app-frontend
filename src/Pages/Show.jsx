import TransactionDetails from "../Components/TransactionDetails";

function Show({ API }) {
  return (
    <div className="Show">
      <h2>Show</h2>
      <TransactionDetails API={API} />
    </div>
  );
}

export default Show;
