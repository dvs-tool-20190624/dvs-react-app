import React, { Component } from 'react'
import Mainpage from './components/Mainpage'
import MainTwo from './components/MainTwo'
import './App.css'
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path = '/' component = {Mainpage} />
        </div>
        <div>
          <PrivateRoute path = '/budget' component = {MainTwo} />
        </div>
      </div>
    )
  }
}

export default App
