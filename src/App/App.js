import React, {Component}from 'react';
import './App.css';
// import NavBar from "../NavBar/NavBar";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import userService from "../../src/utils/userService";
import {Route, Switch, Redirect} from "react-router-dom";
import ExpensePage from "../pages/ExpensePage/ExpensePage"
  

class App extends Component {
  constructor() {
    super();
    this.state= {
      user:userService.getUser()
    }
  }
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }
  
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  render (){
    return(
      <div>
        <header className='header'>Expenses</header>
        <Switch>
          <Route exact path='/' render={() => 
          <ExpensePage 
          user={this.user}
          handleLogout={this.handleLogout}
          />
          }/>
          <Route exact path='/signup' render ={({ history }) => 
            <SignupPage 
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}

            />
          }/>
          <Route exatc path='/login' render={({history}) => 
          userService.getUser() ?
          < LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
          :
          <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    )
  }
}
  
 
export default App;
