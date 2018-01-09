import React from "react"
import Hamburger from "../Hamburger"
import "./Navbar.css"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>

  <nav className="">
    <div className="row">

      <div className="col-sm-11">

        <div className="navbar-header">
          <h1 className="navbar-brand" to="">
            Lunchy
          </h1>
        </div>

      </div>

      <div className='col-sm-1'>
        <Hamburger />
      </div>

    </div>

  </nav>

export default Navbar
