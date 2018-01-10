import React from 'react'
import axios from 'axios'

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
    this.handleAuthComponent = this.handleAuthComponent.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleAuthComponent() {
    this.props.handleAuthComponent
  }

  handleSubmit(e) {
    e.preventDefault()

    const { handler } = this.props

    axios.post('/login', {
      username: this.state.username,
      password: this.state.password,
      group: this.state.group
    })
    .then((res) => {
      handler()
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
                <h3 className="title has-text-grey">Lunchy</h3>
                <p className="subtitle has-text-grey">Please login to proceed.</p>
                <hr />

                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <label for="inputUsername">Username


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
                      <label>Group</label>
                      <input name="group" type="text" className="" onChange={this.handleChange} value={this.state.group}></input>
                  </div>

                  <div className='field'>
                    <label className='checkbox'></label>
                      <input type="checkbox" id="rememberCheckbox"/>
                      <span> </span>
                      Remember me
                    
                  </div>

                  <input type="submit" value='Submit' className=""></input>

                </form>

                <hr />


                
                  <div>Not a registered?</div>
                    
                  <input type="submit" value='signup' onClick={ this.props.action }></input>

              </div>

            </div>
          </section>

      </div>
    )
  }
}

export default Login
