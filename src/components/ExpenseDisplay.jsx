import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const ExpenseDisplay = (props) => { 
    let id = props.id;
    return (
            <Card className="card">
                <label className="category-label">Category: {props.category} </label>
                <label className="name-label">Name of Item: {props.name} </label>
                <label className="cost-label">Cost: ${props.cost} </label>
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
            </Card>
    );
}

export default ExpenseDisplay;