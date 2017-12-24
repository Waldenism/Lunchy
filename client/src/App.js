import React, { Component } from 'react'
// import logo from './logo.svg'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Signup from './components/Signup'
import Scraper from './components/Scraper'
import Login from './components/Login'
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <div> text </div>
          </Wrapper>
          <Footer />
          <Scraper
            handler = { this.handleScraper }
          />
        </div>
      </Router>
    )
  }
}

export default App
