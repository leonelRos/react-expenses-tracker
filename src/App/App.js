import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import InputExpense from '../components/InputExpense';
import ExpensePage from '../pages/ExpensePage/ExpensePage';
import EditExpense from '../components/EditExpense';
import userService from '../utils/userService';
import expenseService from '../utils/ExpenseServices';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      category: "",
      name: "",
      cost: 0,
      items: [],
    };
  }

  

  async componentDidMount() {
    const items = await expenseService.getAll();
    this.setState({items});
  }

  handleAddExpense = async newExpData => {
    const newExp = await expenseService.create(newExpData);
    this.setState(state => ({
      items: [...state.items, newExp]
    }), () => this.props.history.push('/expenses'));
  }

  handleUpdate = async updatedExpData => {
    const updatedExpense = await expenseService.update(updatedExpData);
    const newItemsArray = this.state.items.map(itm => 
      itm._id === updatedExpense._id ? updatedExpense : itm
    );
    this.setState(
      {items: newItemsArray},
      () => this.props.history.push('/expenses')
    );
  }

  handleDelete = async id => {
    await expenseService.delete(id);
    this.setState(state => ({
      // Filter returns a NEW array
      items: state.items.filter(itm => itm._id !== id)
    }), () => this.props.history.push('/expenses'));
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    let createdItem = await expenseService.create({
      category: this.state.category,
      name: this.state.name,
      cost: this.state.cost
    });

    this.setState({
      items: [...this.state.items, createdItem]
    });
  }


  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Expense-Tracker</h1>
        </header>

        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />

        <Switch>

          <Route exact path='/expenses' render={({history}) => 
            <ExpensePage
              history={history}
              items={this.state.items}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
            />
          } />

          <Route exact path='/add' render={() => 
            <InputExpense
              handleAddExpense = {this.handleAddExpense}
            />
          } />

          <Route exact path='/edit/:id' render={({history, location, match}) => 
            <EditExpense
              history={history}
              handleUpdate={this.handleUpdate}
              location={location}
              match={match}
            />
          } />

          <Route exact path="/signup" render={({history}) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>

          <Route exact path="/login" render={({history}) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          
        </Switch>
      </div>
    );
  }
}

export default App;
