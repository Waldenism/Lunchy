import React from 'react'
import axios from 'axios'
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      group: '',

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

    const { handleLinks } = this.props
    const { username, password, group } = this.state

    axios.post('/login', {
      username: username,
      password: password,
      group: group
    })
    .then(res => {
      res.data.username ? handleLinks(true) : handleLinks(false)
    })
    .catch((er) => {
      console.log(er)
    })
  }


  render() {
    return (
      <div>
        <section className="">
          <div className="">
            <div className='box'>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <hr />

              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <div className="control">
                    <label >Username
                      <input name="username" type="text" className="" onChange={this.handleChange} value={this.state.username}></input>
                    </label>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                    <label>Password
                      <input name="password" type="password" className="" onChange={this.handleChange} value={this.state.password}></input>
                    </label>
                  </div>
                </div>


                <div className="field">
                  <div className="control">
                    <label>Group
                      <input name="group" type="text" className="" onChange={this.handleChange} value={this.state.group}></input>
                    </label>
                  </div>
                </div>


                <input type="submit" value='Submit'
                className="button is-normal is-info" ></input>
              </form>
              <hr />


                <h6>Not a registered?</h6>
                <input type="submit" value='signup' className='button is-normal' onClick={ this.props.action }></input>

            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
