import React, { Component } from 'react'
// import logo from './logo.svg'
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
      <div>
        
        <Wrapper>
        <Signup />
        { !loggedIn ? 
          <Login 
            handler = { this.handleLogIn }
          /> : 
          <h1>Hello {user}!</h1>
        }
        </Wrapper>

      </div>
    )
  }
}

export default App
