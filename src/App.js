// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// PAGES
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar transactions={transactions} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/transactions"
              element={<Index API={API} transactions={transactions} />}
            />
            <Route
              path="/transactions/new"
              element={
                <New
                  API={API}
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              }
            />
            <Route path="/transactions/:index" element={<Show API={API} />} />
            <Route
              path="/transactions/:index/edit"
              element={
                <New
                  API={API}
                  transactions={transactions}
                  setTransactions={setTransactions}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
