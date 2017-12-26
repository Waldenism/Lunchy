import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this. state = {
      username: '',
      password: '',
      group: '',
      admin: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

    axios.post('/signup', {
      username: this.state.username,
      password: this.state.password,
      group: this.state.group,
      admin: this.state.admin
    })
    .then((res) => {
      handler(res.data.user);
    })
    .catch((er) => {
      console.log('ERROR!');
      console.log(er);
    })
  }

  render() {
    return (
      <div>
        <h1>Sign Up!</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" name="username" onChange={this.handleChange} value={this.state.username}></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password}></input>
            </div>
            <div className="form-group">
              <label>Group</label>
              <input type="text" className="form-control" name="group" onChange={this.handleChange} value={this.state.group}></input>
              <input type="checkbox" id="groupadmin" name="admin" onChange={this.handleChange} value='true'></input> Group Admin
            </div>

            <input type="submit" value='Submit' className="btn btn-warning btn-lg"></input>


        </form>
      </div>
    )
  }
}

export default Signup
