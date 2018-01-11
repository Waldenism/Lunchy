import React from 'react'
import axios from 'axios'
import MenuList from '../MenuList'
import MenuListItem from '../MenuList'

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      value: '',
      cart: [],
      balance: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }
 componentDidMount() {
    this.menus();
  }
menus()
{ axios.post('/api/scraper', {value: 'subway'})
    .then((res) => {
      this.setState({
        menu: res.data
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }


  handleChange(event) {
    event.preventDefault()

    const { handler } = this.props;
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
  };

  handleClick(event) {
   event.preventDefault()

    const { handler } = this.props;
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
  };


  addItem(event) {
    event.preventDefault()

    const {value} = event.target.item;
    let restaurant = this.state.value;

    axios.post('/api/add', {value, restaurant})
    .then((res) => {
      let { paid, balance } = res.data;

      this.state.cart.push(res.data)
      this.setState({ cart: this.state.cart });

      if (!paid) {
        this.setState({ balance: this.state.balance + balance })
      }
    })
    .catch((er) => {
      console.log(er)
    })
  }


  render() {
    return (
      <div>

        <ol>
          {this.state.cart.map(item =>
            <div>
              <li>{item.item}</li>
            </div>
          )}
          <b>Balance: {this.state.balance}</b>
        </ol>


        <select value={this.state.value}  onClick={this.handleClick} onChange={this.handleChange} className="menu-selection">
          <option onClick={this.handleClick} value='subway'>Subway</option>
          <option value='dairyqueen'>Dairy Queen</option>
        </select>



        <ul>
          {this.state.menu.map(item =>
            <div>
           
              <img src={item.image} />

              <li >{item.name}</li>

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
