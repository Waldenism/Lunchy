import React, { Component } from 'react'
import logo from './logo.svg'
import Signup from './components/Signup'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
// import './App.css'


class App extends Component {
  

  
  render() {
    return (
      <div>
        
        <Wrapper>
          
          <Login />
        </Wrapper>

      </div>
    )
  }
}

export default App
