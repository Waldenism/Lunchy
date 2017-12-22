import React, { Component } from 'react'
// import logo from './logo.svg'
import Signup from './components/Signup'
import Scraper from './components/Scraper'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
// import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loggedIn: false,
      menu: []
    }

    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleScraper = this.handleScraper.bind(this)
  }


  handleLogIn(user) {
    this.setState({
      user,
      loggedIn: true
    })
  }

  handleScraper(menu) {
    this.setState({
      menu: menu
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
        <Scraper
          handler = { this.handleScraper}
        />
        <Menu />
        </Wrapper>

      </div>
    )
  }
}

export default App
