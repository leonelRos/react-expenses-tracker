import React from "react";
import BalanceDisplay from "./BalanceDisplay";
import ExpensesList from "./ExpensesList";

const DisplayBudget = () => {
  return (
    <div>
      <h3>Your Expenses Info</h3>
      <BalanceDisplay />
      <ExpensesList />
    </div>
  );
};

export default DisplayBudget;
