import React, {Component} from 'react';

class InputExpense extends Component {
  state = {
    invalidForm: true,
    formData: {
      category: "",
      name: "",
      cost: 0,
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddExpense(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h2>Add Expense</h2>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="add-label"><strong>Expense Category: </strong></label>
            <input
              className="form-control"
              name="category"
              value={this.state.formData.category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="add-label"><strong>Expense: </strong></label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="add-label"><strong>Price: $</strong></label>
            <input
              className="form-control"
              name="cost"
              value={this.state.formData.cost}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success btn-xs"
            disabled={this.state.invalidForm}
          >
            ADD EXPENSE
          </button>
        </form>
      </>
    );
  }
}
export default InputExpense;