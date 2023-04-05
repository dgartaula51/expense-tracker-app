import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const Transactions = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h4>History</h4>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
