import React from "react";
import { BudgetConsumer } from "../../App/store/Store";

const BalanceDisplay = () => {
  return (
    <BudgetConsumer>
      {value => {
        const totalExpense =
          value.expenses.length > 0
            ? value.expenses.reduce((acc, curr) => {
                acc += parseInt(curr.amount);
                return acc;
              }, 0)
            : 0;
        return (
          <div className="row">
            <div className="col-2">
              <div className="card">
                <div className="header">Budget</div>
                <div className="body">
                  <h5 className="text-center">{value.budget}</h5>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <div className="header">Expenses</div>
                <div className="body">
                  <h5 className="text-center">{totalExpense}</h5>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="card">
                <div className="header">Balance</div>
                <div className="body">
                  <h5 className="text-center">{value.budget - totalExpense}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </BudgetConsumer>
  );
};

export default BalanceDisplay;