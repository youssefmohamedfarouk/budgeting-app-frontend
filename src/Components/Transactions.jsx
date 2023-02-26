import Transaction from "./Transaction";

function Transactions({ API, transactions }) {
  // const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${API}/transactions`)
  //     .then((response) => {
  //       setTransactions(response.data);
  //     })
  //     .catch((e) => console.error("catch", e));
  // }, []);

  return (
    <div className="transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                  API={API}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
