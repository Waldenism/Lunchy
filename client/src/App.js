import React, { Component } from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
// import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loggedIn: false
    }

    this.handleLogIn = this.handleLogIn.bind(this)
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
          <Navabar />
          <Wrapper>
            <div> text </div>
            <Route exact path="/" component={Login} />
            <Route path='/form' component={Form} />
            <Route path='/order' component={Order} />
            
          </Wrapper>
          <Footer />

        </div>
      </Router>
    )
  }
}

export default App
