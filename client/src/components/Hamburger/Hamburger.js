import React from "react"
import { slide as Menu } from 'react-burger-menu'
import Login from '../Login'
import Signup from '../Signup'

import './Hamburger.css'


class Hamburger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
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

  // handleUserState = ev => {
  //   this.setState({ user: ev })
  // }

  // renderUserState = () => {
  //   if (this.state.user === false ) {
  //     return 
  //   } else {
  //     return
  //   }
  // }
 
  render () {
    return (
      <div>
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleMenuStateChange}
        >
          <Login />
          <Signup />

        </Menu>
        
      </div>
      

    )
  }




  
}

export default Hamburger