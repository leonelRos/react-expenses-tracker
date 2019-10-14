import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseDisplay = (props) => { 
    let id = props.id;
    return (
            <form className="card">
                <label className="category-label"><strong>Expense Category: {props.category} </strong></label>
                <label className="name-label"><strong>Expense: {props.name} </strong></label>
                <label className="cost-label"><strong>Price: ${props.cost} </strong></label>
                <div>
                    <button
                        onClick={() => props.handleDelete(id)}
                        className="btn btn-xs btn-danger btn-card"
                    >
                        Delete
                    </button>
                    
                    <Link
                        className="btn btn-xs btn-warning"
                        to={`/edit/${id}`}
                    >
                        Edit
                    </Link>
                </div>
            </form>
    );
}

export default ExpenseDisplay;