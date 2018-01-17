
//dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from 'axios'

//style sheet
import './assets/App.css'

//pages
import Home from './pages/Home'
import Balance from './pages/Balance'
import GroupOrder from './pages/GroupOrder'
import AccountSettings from './pages/AccountSettings'

//sidebar
import Hamburger from './components/Hamburger'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      isLoggedIn: false,
      admin: false,
      name: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleLogin() {
    axios.get('/api/user/current').then(res => {
      if (!res.data.username) {
        this.setState({
          isLoggedIn: false,
          admin: false,
          name: ''
        })

      } else {
        let { group, username, name } = res.data;

        if (username) {
          this.setState({
            isLoggedIn: true,
            name: name.first,
            menuOpen: false
          })

          if (group.admin) {
            this.setState({
              admin: true
            })
          }
        }

      }
    })
  }

  openMenu(){
    this.setState({ menuOpen: true })
  }

  closeMenu(){
    this.setState({ menuOpen: false })
  }


  render() {
    return (
      <Router >
        <div className='toot'>

          <div className='header'>
            <div className=''>
              <h1> LunchTime </h1>

              <Hamburger
                {...this.state}
                handleLogin={ this.handleLogin }
                closeMenu={ this.closeMenu }
                openMenu={ this.openMenu }
              />

            </div>
          </div>

          <div className='main'>
            <Route exact path="/" render={() => (<Home {...this.state} />)} />
            <Route path="/balance" render={() => (<Balance {...this.state} />)} />
            <Route path="/group-order" render={() => (<GroupOrder {...this.state} />)} />
            <Route path="/account-settings" render={() => (<AccountSettings {...this.state} />)} />
          </div>

        </div>
      </Router>
    )
  }
}

export default App
