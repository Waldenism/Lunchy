import React from 'react'
import axios from 'axios'
// import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { handler } = this.props

    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      handler(res.data.user)
    })
    .catch((er) => {
      console.log(er)
    })
  }

  render() {
    return (
      <div>
        <h1> Log In! </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Username</label>
                <input name="username" type="text" className="form-control" onChange={this.handleChange} value={this.state.username}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" onChange={this.handleChange} value={this.state.password}></input>
            </div>

            <input type="submit" value='Submit' className="btn btn-warning btn-lg"></input>
          </form>
      </div>
    )
  }
}

export default Login