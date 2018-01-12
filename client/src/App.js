
//dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//components
import WrapperSmall from './components/WrapperSmall'
import WrapperBig from './components/WrapperBig'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

//pages
import Home from './pages/Home'
import Balance from './pages/Balance'
import GroupOrder from './pages/GroupOrder'


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
        <div>

          {/*<WrapperSmall>

          </WrapperSmall>*/}
          <Navbar />
          <WrapperBig>
            <Route exact path="/" component={Home} />
            <Route path="/balance" component={Balance} />
            <Route path="/group-order" component={GroupOrder} />

          </WrapperBig>

          <Footer />

        </div>
      </Router>
    )
  }
}

export default App
