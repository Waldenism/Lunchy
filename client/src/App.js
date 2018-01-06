
//dependencies 
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//components
import Signup from './components/Signup'
import Scraper from './components/Scraper'
import Login from './components/Login'
import WrapperSmall from './components/WrapperSmall'
import WrapperBig from './components/WrapperBig'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

//pages
import Home from './pages/Home'


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
          <WrapperSmall>
            <Navbar />
          </WrapperSmall>
          
          <WrapperBig>
            {/*<Route exact path="/" component={Home} />

            
            <Route path="/my-order" component={Order} />
            <Route path="/balance" component={Balance} />
            <Route path="/group-order" component={Search} />*/}
            

          </WrapperBig>
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
