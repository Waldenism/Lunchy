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
    this.addItem = this.addItem.bind(this);
  }


  handleChange(event) {
    event.preventDefault()

    const { handler } = this.props
    const {value} = event.target;

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
  };


  addItem(event) {
    event.preventDefault()

    const {value} = event.target.item;

    axios.post('/api/add', {value})
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
              <img src={item.image} />
              <li>{item.name}</li>
              <form onSubmit={this.addItem}>
                <div className="form-group">
                  <input type="hidden" className="form-control" name="item" value={item.name}></input>
                  <input type="submit" value='Add Item' className="btn btn-warning btn-md"></input>
                </div>
              </form>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Scraper
