import React from 'react'
import axios from 'axios'

class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }


  componentWillMount() {
    axios.get('/api/user/current').then(res => {
      this.setState({ user: res.data });
      this.renderInfo();
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { first, last, username, group } = e.target;
    let updatedInfo = {
      first: first.value,
      last: last.value,
      username: username.value,
      group: group.value
    }

    axios.post('/api/user/update-account', updatedInfo)
    .then(res => {
      this.setState({
        submitted: true })
    })
    .catch((er) => {
      console.log(er)
    })
  }

  renderInfo() {
    let info = ''
    const { name, username, group, password } = this.state.user;

    if (Object.keys(this.state.user).length) {
      if (this.state.submitted) {
        info = "Your account has been updated"

      } else {
        info = <div>
          <form onSubmit={this.handleSubmit}>
            First Name: <input type="text" name="first" defaultValue={ name.first } /><br />
            Last Name: <input type="text" name="last" defaultValue={ name.last } /><br />
            Username: <input type="text" name="username" defaultValue={ username } /><br />
            Group name: <input type="text" name="group" defaultValue={ group.name } /><br />
            <input type="submit" value='Submit' className="button is-normal" ></input>
          </form>
        </div>
      }

    }

    return (
      info
    )
  }


  render() {
    return(
      <div className='pageWrap'>
        <div> <h2 className='pageTitle'> Account Settings </h2> </div>

        { this.renderInfo() }

      </div>
    )
  }
}

export default AccountSettings
