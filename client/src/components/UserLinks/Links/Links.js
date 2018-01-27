import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Links.css'

class Links extends React.Component {
    constructor (props) {
      super(props)
      this.Logout = this.Logout.bind(this);
    }

    //post to logout
    Logout(e) {
      e.preventDefault()
      axios.get('/logout').then(() => {
        this.props.handleLinks(false)
      })
    }

  render() {
    let link;

    //if admin, display Group Orders link
    if (this.props.admin) {
      link = <li><Link to="/group-order"> Group's Order </Link></li>;
    }

    return (
      <div>
        <div className='container burgerContainer'>
          <ul className="burgerNav">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/my-orders"> My Orders </Link>
            </li>
              {link}
            <li>
              <Link to="/account-settings"> Account Settings </Link>
            </li>
          </ul>
        </div>

        <br /><br /><br />

        <div className='container'>
          <div className='logoutHero'>
            <div className='logoutButton'>
              <input type="submit" value='Logout' className='button is-normal is-success' onClick={this.Logout}></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Links
