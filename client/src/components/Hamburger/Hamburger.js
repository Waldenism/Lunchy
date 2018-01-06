import React from "react"
import { slide as Menu } from 'react-burger-menu'



class Hamburger extends React.Component {

  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <Menu isOpen={ true } >
        
      </Menu>
    );
  }




  
}

export default Hamburger