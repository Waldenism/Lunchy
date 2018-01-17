import React from 'react'
import axios from 'axios'
import './Signup.css'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this. state = {
      username: '',
      password: '',
      first: '',
      last: '',
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

    const { handleLinks } = this.props
    const { username, password, first, last, group, admin } = this.state

    axios.post('/signup', {
      username: username,
      password: password,
      first: first,
      last: last,
      group: group,
      admin: admin
    })
    .then(res => {
      res.data.username ? handleLinks(true) : handleLinks(false)
    })
    .catch((er) => {
      console.log('ERROR!');
      console.log(er);
    })
  }


  render() {
    return (
      <div>
        <h3>Sign Up!</h3>

        <section>
          <div>
            <div className='box'>
              <p className="subtitle has-text-grey">Create Account</p>
              <hr />


              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <div className="control">
                    <label>Username
                      <input name="username" type="text" className="form-control" onChange={this.handleChange} value={this.state.username}></input>
                    </label>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                    <label>Password
                      <input name="password" type="password" className="form-control" onChange={this.handleChange} value={this.state.password}></input>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label >First Name
                      <input type="text" className="form-control" name="first" onChange={this.handleChange} value={this.state.first}></input>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label>Last Name
                      <input type="text" className="form-control" name="last" onChange={this.handleChange} value={this.state.last}></input>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label>Group

                      <input name="group" type="text" className="form-control" onChange={this.handleChange} value={this.state.group}></input>
                      <hr />
                      <span className='admin-label'>Are you registerting as an admin?</span>
                      <input type="checkbox" id="groupadmin" name="admin" onChange={this.handleChange} value='true'></input>

                    </label>
                  </div>
                </div>


                <div className="field is-grouped">
                  <div className="control">
                      <input type="submit" value='Submit' className="button is-normal is-info"></input>
                  </div>
                </div>
              </form>
              <hr />

              <form >
                <div className="feild">
                  <div className="control">
                    <div>Already a Member?
                      <input type="submit" value='Login' className="" onClick={ this.props.action }></input>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Signup
