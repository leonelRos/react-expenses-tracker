import React, { Component } from "react";
import { BudgetConsumer } from "../../App/store/Store";

class ExpensesList extends Component {
  render() {
    return (
      <div className="card1">
        <table className="table-board">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <BudgetConsumer>
            {value => {
              const expensesList =
                value.expenses.length > 0 ? (
                  value.expenses.map((expense, index) => {
                    return (
                      <tr key={index}>
                        <td>{expense.title}</td>
                        <td>{expense.amount}</td>
                        <td>
                          <button>Delete</button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>No Listed Expense yet</td>
                  </tr>
                );
              return <tbody>{expensesList}</tbody>;
            }}
          </BudgetConsumer>
        </table>
      </div>
    );
  }
}
export default ExpensesList;