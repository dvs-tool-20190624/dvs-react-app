import React, { Component } from 'react'
import MainPage from './components/MainPage'
import MainTwo from './components/MainTwo'
import './App.css'
import { Route } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  render() {
    return (
      <div>
        <div>
          <Route exact path = '/' component = {MainPage} />
        </div>
        <div>
          <Route path = '/budget' component = {MainTwo} />
        </div>
      </div>
    )
  }
}

export default App