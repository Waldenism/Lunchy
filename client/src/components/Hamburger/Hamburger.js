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
      admin: false
    }

    this.openLinks = this.openLinks.bind(this)
    this.removeLinks = this.removeLinks.bind(this)
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
      links = <div><Login handler={ this.openLinks } /> <Signup handler={ this.openLinks } /></div>
    }


    return (
      <div>
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleMenuStateChange}
        >

        {links}

        </Menu>

      </div>

    )
  }

}

export default Hamburger
