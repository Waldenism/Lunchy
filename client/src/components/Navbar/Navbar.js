import React from "react"
import { Link } from "react-router-dom"
import Login from "../Login"
import "./Navbar.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">

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
          <Link to="/">Orders</Link>
        </li>
        <li
          className={window.location.pathname === "" ? "active" : ""}
        >
          <Link to="/order"> Account Balance </Link>
        </li>
        <li className={window.location.pathname === "" ? "active" : ""}>
          <Link to="/"> Tab </Link>
        </li>

      </ul>

      <Login />


    </div>
  </nav>

export default Navbar