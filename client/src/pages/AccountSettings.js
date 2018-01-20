import React from 'react'
import axios from 'axios'

class AccountSettings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }


  componentDidMount() {
    this.renderInfo();
  }

  //submit account information changes
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
      console.debug(er)
    })
  }

  //gets information from state
  renderInfo() {
    const { name, username, group, password } = this.props.user;

    if (Object.keys(this.props.user).length) {
      if (this.state.submitted) {
        return ("Your account has been updated")

      } else {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              First Name: <input type="text" name="first" defaultValue={ name.first } /><br />
              Last Name: <input type="text" name="last" defaultValue={ name.last } /><br />
              Username: <input type="text" name="username" defaultValue={ username } /><br />
              Group name: <input type="text" name="group" defaultValue={ group.name } /><br />
              <input type="submit" value='Submit' className="button is-normal" ></input>
            </form>
          </div>
        )
      }
    }
  }


  render() {
    return(
      <div className='pageWrap'>
        <div> <h2 className='pageTitle'> Account Settings </h2> </div>
        {this.renderInfo()}
      </div>
    )
  }
}

export default AccountSettings
