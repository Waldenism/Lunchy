import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Links extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          admin: false
        }
    }

  render() {
    let link;

    // if (admin) {
    //   let link = <li className={window.location.pathname === "" ? "active" : ""}>
    //     <Link to="/group-order"> Group's Order </Link>
    //   </li>
    // }

    return (
      <div> 
        <ul className="nav navbar-nav">

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

        </ul>
      </div>
    )
  }
}

export default Links
