import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import UserList from './components/UserList';
import CakeList from './components/CakeLIst';
import Signup from './components/Signup';
import Login from './components/Login';
import { Component } from 'react';

class App extends Component{
  constructor() {
    super()
    this.state = {
      users: []
    };
  }

  updateState = (user) => {
    let usersArr = {...this.state};
    usersArr.users.push(user);
    this.setState({usersArr});
    console.log(this.state.users);
  };
  render() {
    return (
      <div>
        <Navbar/>
        <Signup updateState={this.updateState}/>
        <Login/>
        <UserList users={this.state.users}/>
      </div>  
    );
  }
}

export default App;
