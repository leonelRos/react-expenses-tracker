import React from 'react';
import InputBudget from "../budget/InputBudget";
import InputExpenses from "../budget/InputExpenses";
import DisplayBudget from "../display/DisplayBudget";

const Budget =() => {
    return(
        <div className="row">
        <div className="Col-1">
        <InputBudget />
        <InputExpenses />
      </div>
      <div className="col-2">
        <DisplayBudget />
      </div>
    </div> 
    )
}

export default Budget;