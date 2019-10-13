import React from 'react';
import ExpenseDisplay from "../../components/ExpenseDisplay";

function ExpensePage(props) {
  return (
    <>
      <h2>Expense List</h2>
      <div className='card-container'>
        {props.items.map(item =>
          <ExpenseDisplay
            key={item._id}
            id={item._id}
            category={item.category}
            name={item.name}
            cost={item.cost}
            handleDelete={props.handleDelete}
          />
        )}
      </div>
    </>
  );
}
export default ExpensePage;