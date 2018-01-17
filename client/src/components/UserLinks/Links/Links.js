import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Links.css'

class Links extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          admin: false
        }

        this.Logout = this.Logout.bind(this);
    }

    componentDidMount() {
      axios.get('/api/user/current').then(res => {
        let { admin } = res.data.group;
        if (admin) {
          this.setState({
            admin: true
          })
        }
      })
    }

    Logout(e) {
      e.preventDefault()
      axios.get('/logout').then(() => {
        this.props.handleLinks(false)
      })
    }

  render() {
    let link;

    if (this.state.admin) {
      link = <li className={window.location.pathname === "" ? "active" : ""}>
      <Link to="/group-order"> Group's Order </Link></li>;
    }

    return (
      <div>

        <div className='container burgerContainer'>
          <ul className="burgerNav">

            <li
              className={
                window.location.pathname === "/" ||
                window.location.pathname === ""
                  ? "active"
                  : ""
              }
            >
              <Link to="/"> My Order </Link>
            </li>

            <li
              className={window.location.pathname === "" ? "active" : ""}
            >
              <Link to="/balance"> Account Balance </Link>
            </li>

            {link}

            <li
              className={window.location.pathname === "" ? "active" : ""}
            >
              <Link to="/account-settings"> Account Settings </Link>
            </li>

          </ul>
        </div>

        <br /><br /><br />

        <div className='container'>
          <div className='logoutHero'>

            <form className='clear' onSubmit={this.Logout}>
              <div className='logoutButton'>
                <input type="submit" value='Logout' className='button is-normal is-success'></input>
              </div>
            </form>

          </div>
        </div>

      </div>
    )
  }
}

export default Links
