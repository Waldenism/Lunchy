import React from "react"

class Hamburger extends React.Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    // this.handleLogIn = this.handleLogIn.bind(this)

    this.state = {
      isOpen: false
    }
  }

  handleClick (e) {
    console.log(e.target)
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div className={this.state.isOpen ? 'hamburger active' : 'hamburger'} onClick={ this.handleClick }>
        <div className="line"></div> 
        <div className="line"></div> 
        <div className="line"></div> 
      </div>
    )
  }

}

export default Hamburger