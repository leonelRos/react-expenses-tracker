import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditExpense extends Component {
  state = {
    invalidForm: false,
    cost: "",
    category: "",
    name: ""
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdate({
      id: this.props.match.params.id,
      cost: this.state.cost,
      category: this.state.category,
      name: this.state.name,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    console.log(this.props)
    return (
      <>
        <h2>Edit Expense</h2>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="edit-label"><strong>Expense Category: </strong></label>
            <input
              className="form-control"
              name="category"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="edit-label"><strong>Expense: </strong></label>
            <input
              className="form-control"
              name="name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="edit-label"><strong>Price: $</strong></label>
            <input
              className="form-control"
              name="cost"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE EXPENSE
          </button>&nbsp;&nbsp;
          <Link to='/expenses'>CANCEL</Link>
        </form>
      </>
    );
  }
}
export default EditExpense;