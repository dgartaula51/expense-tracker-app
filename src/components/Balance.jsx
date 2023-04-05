import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h5>Account Balance</h5>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
