import React from 'react';
import {Link} from 'react-router-dom';
// import Card from 'react-bootstrap/Card';


const ExpenseDisplay = (props) => { 
    let id = props.id;
    return (
            <form className="card">
                <label className="category-label">Expense Category: {props.category} </label>
                <label className="name-label">Expense: {props.name} </label>
                <label className="cost-label">Price: ${props.cost} </label>
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