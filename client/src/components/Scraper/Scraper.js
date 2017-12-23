import React from 'react'
import axios from 'axios'

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      value: 'subway'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    const { handler } = this.props

    axios.post('/api/scraper/subway', {value: this.state.value})
    .then((res) => {
      handler(res.data)
      this.setState({
        menu: res.data
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange} className="menu-selection">
            <option value='subway'>Subway</option>
            <option value='burgerking'>Burger King</option>
          </select>
          <input type="submit" value='Submit' className="btn btn-warning btn-lg"></input>
        </form>

        <ul>
          {this.state.menu.map(item =>
            <div>
              <li>{item.name}</li>
              <img src={item.image} />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Scraper
