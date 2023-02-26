import Transactions from "../Components/Transactions";

function Index({ API, transactions }) {
  return (
    <div className="Index">
      <h2>Index</h2>
      <Transactions API={API} transactions={transactions} />
    </div>
  );
}

export default Index;
