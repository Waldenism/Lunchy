import React from 'react'
import './Login.css'

const Login = props =>
  <div>
    <h1> Log In! </h1>
      <form action="/login" method="post">
        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" name="username"></input>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password"></input>
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Login</button>
      </form>
  </div>

export default Login