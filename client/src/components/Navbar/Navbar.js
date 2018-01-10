import React from "react"
import Hamburger from "../Hamburger"
import "./Navbar.css"


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>

<div>
  <h1 className="navbar-brand" to="">Lunchy</h1>
  <Hamburger />   
</div>
export default Navbar
