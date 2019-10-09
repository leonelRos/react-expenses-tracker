import React, { Component } from "react";
import { BudgetConsumer } from "../../App/store/Store";

class InputBudget extends Component {
  state = {
    budget: ""
  };
  handleInput = e => {
    this.setState({ budget: e.target.value });
  };
  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BUDGET",
      budget: this.state.budget
    });
  };
  render() {
    return (
      <BudgetConsumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <label>Your Expense</label>
              <form className="from-inline">
                <input
                  onChange={this.handleInput}
                  value={this.state.budget}
                  className="F-control"
                  type="number"
                />
                <button onClick={this.handleSubmit.bind(this, dispatch)}>
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </BudgetConsumer>
    );
  }
}
export default InputBudget;