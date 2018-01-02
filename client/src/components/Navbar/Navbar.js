import React from "react"
import { Link } from "react-router-dom"
import Login from "../Login"
import "./Navbar.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="">
    <div className="">

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

      {/* comment*/}
        <li className={window.location.pathname === "" ? "active" : ""}>
          <Link to="/group-order"> Tab </Link>
        </li>

      </ul>

      <Login />


    </div>
  </nav>

export default Navbar