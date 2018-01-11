import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

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
      axios.get('/logout').then(data => this.props.handler(data))
    }

  render() {
    let link;

    if (this.state.admin) {
      link = <li className={window.location.pathname === "" ? "active" : ""}>
      <Link to="/group-order"> Group's Order </Link></li>;
    }

    return (
      <div>
        <ul className="nav navbar-nav">

        <li
            className={window.location.pathname === "" ? "active" : ""}
          >
            <Link to="/"> Home </Link>
          </li>


          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === ""
                ? "active"
                : ""
            }
          >
            <Link to="/"> Order </Link>
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
            <form onSubmit={this.Logout}>
              <input type="submit" value='Logout'></input>
            </form>
          </li>

        </ul>
      </div>
    )
  }
}

export default Links
