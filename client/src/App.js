import React, { Component } from 'react'
import logo from './logo.svg'
import Signup from './components/Signup'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
// import './App.css'


class App extends Component {
  state = {
    //stateful things
    //restaurant
    //orders
  }

  //event handlers



  render() {
    return (
      <Wrapper>
        <Signup />
        <Login />
      </Wrapper>
    )
  }
}

export default App
