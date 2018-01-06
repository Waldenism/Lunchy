import React from 'react'
import axios from 'axios'

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      value: 'subway'
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {

    const { handler } = this.props
    const { value } = event.target;

    this.setState({value});

    axios.post('/api/scraper', {value})
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


  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange} className="menu-selection">
          <option value='subway'>Subway</option>
          <option value='dairyqueen'>Dairy Queen</option>
        </select>

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
