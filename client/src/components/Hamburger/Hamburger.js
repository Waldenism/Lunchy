import React from "react"
import { slide as Menu } from 'react-burger-menu'
import Login from '../UserLinks/Login'
import Signup from '../UserLinks/Signup'
import Links from '../UserLinks/Links'

import './Hamburger.css'



class Hamburger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      isLoggedIn: false,
      admin: false,
      auth: 'login'
    }

    this.openLinks = this.openLinks.bind(this)
    this.removeLinks = this.removeLinks.bind(this)
    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth( ) {
    this.setState({
      auth: 'signup'
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

  openLinks() {
    this.setState({
      isLoggedIn: true
    })
  }

  removeLinks() {
    this.setState({
      isLoggedIn: false
    })
  }

  render () {
    let links;

    if (this.state.isLoggedIn) {
      links = <Links handler={ this.removeLinks } />
    } else {
        if(this.state.auth === 'login') {
          links = <Login handler={ this.openLinks } action={ this.handleAuth } />
        } else {
          links = <Signup handler={ this.openLinks } />
        }

    }

    return (
      <div>
        <Menu
          right
        >

          {links}

        </Menu>

      </div>

    )
  }

}

export default Hamburger
