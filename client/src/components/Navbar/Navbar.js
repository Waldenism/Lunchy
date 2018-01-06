import React from "react"
import { Link } from "react-router-dom"
import Login from "../Login"
import Hamburger from "../Hamburger"
import "./Navbar.css"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>

  <nav className="">
    <div className="row">

      <div className="col-sm-11">

        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Lunchy
          </Link>
        </div>


        <ul className="nav navbar-nav">

          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === ""
                ? "active"
                : ""
            }
          >
            <Link to="/my-order"> My Order </Link>
          </li>
          <li
            className={window.location.pathname === "" ? "active" : ""}
          >
            <Link to="/balance"> Account Balance </Link>
          </li>

          <li className={window.location.pathname === "" ? "active" : ""}>
            <Link to="/group-order"> Group's Order </Link>
          </li>

        </ul>

        {/*<Login />*/}


      </div>

      <div className='col-sm-1'>
        <Hamburger />
      </div>

    </div>

  </nav>

export default Navbar