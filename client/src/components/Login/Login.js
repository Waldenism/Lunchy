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
          <form onSubmit={this.handleSubmit}>
            <div className="">
                <label>Username</label>
                <input name="username" type="text" className="" onChange={this.handleChange} value={this.state.username}></input>
            </div>
            <div className="">
                <label>Password</label>
                <input name="password" type="password" className="" onChange={this.handleChange} value={this.state.password}></input>
            </div>

            <input type="submit" value='Submit' className=""></input>
          </form>
      </div>
    )
  }
}

export default Login