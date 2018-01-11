import React from "react"
import { slide as Menu } from 'react-burger-menu'
import Login from '../UserLinks/Login'
import Signup from '../UserLinks/Signup'
import Links from '../UserLinks/Links'
import axios from 'axios'

import './Hamburger.css'



class Hamburger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      isLoggedIn: false,
      admin: false,
      auth: 'login',
      name: ''
    }

    this.openLinks = this.openLinks.bind(this)
    this.removeLinks = this.removeLinks.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
      axios.get('/api/user/current').then(res => {
        let { group, username, name } = res.data;
        if (username) {
          this.setState({
            isLoggedIn: true,
            name: name.first
          })
        }

        if (group.admin) {
          this.setState({
            admin: true
          })
        }

      })
  }

  handleSignup( ) {
    this.setState({
      auth: 'signup',
      isLoggedIn: false
    })
  }

  handleLogin( ) {
    this.setState({
      auth: 'login',
      isLoggedIn: false
    })
  }

  handleMenuStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  openLinks(conf) {
    if (conf) {
      this.setState({
        isLoggedIn: true,
        auth: null
      })
    }
  }

  removeLinks(conf) {
    if (conf) {
      this.setState({
        isLoggedIn: false,
        auth: 'login'
      })
    }
  }

  render () {
    let links;
    let greeting;

    if (this.state.isLoggedIn) {
      greeting = <h2> Hi {this.state.name}! </h2>
      links = <Links handler={ this.removeLinks } />
    } else {
        greeting = <h2> Welcome to Lunchy! </h2>
        if(this.state.auth === 'login') {
          links = <Login handler={ this.openLinks } action={ this.handleSignup } />
        } else {
          links = <Signup handler={ this.openLinks } action={ this.handleLogin } />
        }

    }


    return (
      <div>
        <Menu right>

        {greeting}

        {links}

        </Menu>

      </div>

    )
  }

}

export default Hamburger
