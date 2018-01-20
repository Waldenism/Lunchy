//dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from 'axios'

//style sheet
import './assets/App.css'

//components
import Hamburger from './components/Hamburger'

//pages
import AccountSettings from './pages/AccountSettings'
import GroupOrder from './pages/GroupOrder'
import Home from './pages/Home'
import MyOrders from './pages/MyOrders'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      isLoggedIn: false,
      admin: false,
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  //checks login status before rendering
  componentDidMount() {
    this.handleLogin();
  }

  //Sets state for login status
  handleLogin() {
    axios.get('/api/user/current').then(res => {

      //if no user logged in, initialize state
      if (!res.data.username) {
        this.setState({
          isLoggedIn: false,
          admin: false,
          user: {}
        })

      //if logged in, set state based on login information
      } else {
        let { group, username } = res.data;

        if (username) {
          this.setState({
            menuOpen: false,
            isLoggedIn: true,
            user: res.data,
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

  //sets hamburger sidebar to open
  openMenu(){
    this.setState({ menuOpen: true })
  }
  //sets hamburger sidebar to closed
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
            <Route path="/account-settings" render={() => (<AccountSettings user={this.state.user} />)} />
            <Route path="/group-order" render={() => (<GroupOrder user={this.state.user} />)} />
            <Route exact path="/" render={() => (<Home user={this.state.user} />)} />
            <Route path="/my-orders" render={() => (<MyOrders user={this.state.user} />)} />
          </div>

        </div>
      </Router>
    )
  }
}

export default App
