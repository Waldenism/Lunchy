
//dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//style sheet
import './App.css'

//pages
import Home from './pages/Home'
import Balance from './pages/Balance'
import GroupOrder from './pages/GroupOrder'

//sidebar
import Hamburger from './components/Hamburger'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loggedIn: false,
      menu: []
    }

    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleSignUp(user) {
    this.setState({
      user,
      loggedIn: true
    })
  }

  handleLogIn(user) {
    this.setState({
      user,
      loggedIn: true
    })
  }

  render() {

    let { loggedIn, user } = this.state

    return (
      <Router>
        <div className='toot'>

          <div className='header'>
            <div className=''>
              <h1> LunchTime </h1>
              <Hamburger />
            </div>
          </div>

          <div className='main'>
            <Route exact path="/" component={Home} />
            <Route path="/balance" component={Balance} />
            <Route path="/group-order" component={GroupOrder} />
          </div>

        </div>
      </Router>
    )
  }
}

export default App
