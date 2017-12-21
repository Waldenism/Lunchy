import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        hello world
      </div>

      <ul className="nav navbar-nav">


        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          
        </li>
        <li
          className={window.location.pathname === "/discover" ? "active" : ""}
        >
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
        </li>


      </ul>


    </div>
  </nav>

export default Navbar