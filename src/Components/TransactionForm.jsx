import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function TransactionForm({ API, transactions, setTransactions, stateHelper }) {
  let { index } = useParams();
  let navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    amount: "",
    category: "",
    date: "",
    from: "",
    id: "",
    item_name: "",
    transaction_type: "",
  });

  useEffect(() => {
    if (index) {
      axios
        .get(`${API}/transactions/${index}`)
        .then((response) => {
          setTransaction(response.data);
        })
        .catch((e) => console.error("catch", e));
    }
  }, []);

  // const [transactionsArr, setTransactionsArr] = useState([]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!index) {
      axios
        .post(`${API}/transactions`, {
          ...transaction,
          id: uuidv4(),
        })
        .then((a) => {
          // console.log(a);
          // setTransactions(a.data);
          stateHelper(a.data, "create");
          navigate(`/transactions`);
        });
    } else {
      axios.put(`${API}/transactions/${index}`, transaction).then((a) => {
        // console.log(a);
        // setTransactions(a.data);
        stateHelper(a.data, "update");
        navigate(`/transactions/${index}`);
      });
    }
  };

  return (
    <div className={"form"}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            value={transaction.date}
            type="date"
            onChange={handleTextChange}
            placeholder="mm/dd/yyyy"
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="item_name">Transaction:</label>
          <input
            id="item_name"
            name="item_name"
            value={transaction.item_name}
            type="text"
            onChange={handleTextChange}
            placeholder="..."
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="item_name">From:</label>
          <input
            id="from"
            name="from"
            value={transaction.from}
            type="text"
            onChange={handleTextChange}
            placeholder="..."
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleTextChange}
            placeholder="$$$"
            required
          />
        </div>
        <br />

        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={transaction.category}
            onChange={handleTextChange}
          >
            <option value="Deposit">Deposit</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Merchandise">Merchandise</option>
            <option value="Transportation">Transportation</option>
            <option value="Bill">Bill</option>
          </select>
        </div>
        <br />

        <div>
          <label htmlFor="transaction_type">Transaction Type:</label>
          <select
            id="transaction_type"
            name="transaction_type"
            value={transaction.transaction_type}
            onChange={handleTextChange}
          >
            <option value="Credit">Credit</option>
            <option value="Purchase">Purchase</option>
          </select>
        </div>
        <br />

        <input type="submit" />
      </form>
      <Link to={index ? `/transactions/${index}` : "/transactions"}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionForm;
