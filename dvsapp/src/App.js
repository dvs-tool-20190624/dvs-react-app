import React, { Component } from 'react'
import Mainpage from './components/Mainpage'
import Budget from './components/Budget'
import Results from './components/Results'
import './App.css'
import { Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path = '/' component = {Mainpage} />
        </div>
        <div>
          <PrivateRoute path = '/budget' component = {Budget} />
        </div>
        <div>
          <PrivateRoute path = '/results' component = {Results} />
        </div>
      </div>
    )
  }
}

export default App
