import React from 'react'
import './Signup.css'

const Signup = props =>
  <div>
    <h1> Sign Up! </h1>
    <form action="/signup" method="post">
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" name="username"></input>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" name="password"></input>
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>
  </div>

export default Signup