import React from 'react'
// import './Signup.css'

const Signup = props =>
  <div>
    <h1> Sign Up! </h1>
    <form action="/signup" method="post">
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password"></input>
        </div>

        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
    </form>
  </div>

export default Signup