import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import Transactions from "./components/TransactionsList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
