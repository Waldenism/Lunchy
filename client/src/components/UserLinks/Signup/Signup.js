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
      handler();
    })
    .catch((er) => {
      console.log('ERROR!');
      console.log(er);
    })
  }

  render() {
    return (
      <div>

        <section>
          <div>
                <div className='box'>
                  <h3 className="title has-text-grey">Lunchy</h3>
                  <p className="subtitle has-text-grey">Create Account</p>
                  <hr />
                  
                  <form onSubmit={this.handleSubmit}>
                    
                    <div className="field">
                      <div className="control">
                        <label for="inputPassword">Username
                          <input name="username" type="text" className="" onChange={this.handleChange} value={this.state.username}></input>
                        </label>
                      </div>
                    </div>

                    
                    <div className="field">
                      <div className="control">
                        <label for="inputPassword">Password
                          <input name="password" type="password" className="" onChange={this.handleChange} value={this.state.password}></input>
                        </label>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <label for="group">Group
                        <input name="group" type="text" className="" onChange={this.handleChange} value={this.state.group}></input>
                        <input type="checkbox" id="groupadmin" name="admin" onChange={this.handleChange} value='true'></input> Group Admin
                        </label>
                      </div>
                    </div>

                    <div className="field is-grouped">
                      <div className="control">
                          <input type="submit" value='Submit' className=""></input>
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
