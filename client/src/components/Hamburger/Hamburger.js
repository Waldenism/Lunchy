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
      auth: 'login'
    }

    this.toggleAuth = this.toggleAuth.bind(this)
    this.handleLinks = this.handleLinks.bind(this)

  }

  toggleAuth( ) {
    this.state.auth === 'signup' ?
    this.setState({ auth: 'login' }) :
    this.setState({ auth: 'signup' });
    this.props.openMenu();
  }

  handleLinks(conf) {
    if (conf) {
      this.setState({ auth: null });
      this.props.handleLogin();

    } else {
      this.setState({ auth: 'login' });
      this.props.openMenu();
      this.props.handleLogin();
    }
  }

  render () {
    let links;
    let greeting;

    if (this.props.isLoggedIn) {
      greeting = <h2> Hi {this.props.name}! </h2>
      links = <Links handleLinks={ this.handleLinks } />

    } else {
        greeting = <h2> Welcome to LunchTime! </h2>

        if(this.state.auth === 'login') {
          links = <Login handleLinks={ this.handleLinks } action={ this.toggleAuth } />
        } else {
          links = <Signup handleLinks={ this.handleLinks } action={ this.handleAuth } />
        }
    }


    return (
      <div>
        <Menu right isOpen={ this.props.menuOpen } >

          {greeting}


          {links}

        </Menu>

      </div>

    )
  }

}

export default Hamburger
