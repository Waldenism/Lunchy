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
    .then(res => {
      res.data.username ? handler(true) : handler(false)
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
                      <label>Group <span>       </span>

                        <input name="group" type="text" className="" onChange={this.handleChange} value={this.state.group}></input>


                      </label>
                      
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label> Remember me <span> </span>
                        <input type="checkbox" />
                      </label>
                    </div>



                  </div>

                  <input type="submit" value='Submit' className="button is-normal is-info" ></input>
                
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
