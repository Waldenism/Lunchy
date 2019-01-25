
import './Scraper.css'

import React from 'react'
import axios from 'axios'

import Modal from '../Modal/Modal'


class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      restaurant: '',
      cart: [],
      balance: 0,
      toggled: [],
      isModalOpen: false,
      isLoggedIn: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
    this.clearSelection = this.clearSelection.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }


  componentWillMount() {
    this.setState({
      restaurant: 'dairyqueen'
    });
  }

  componentDidMount() {
    this.menus();
  }


//get menu from scraper
  menus() {
    let { restaurant } = this.state

    axios.post('/api/scraper', { restaurant: restaurant })
    .then((res) => {
      this.setState({
        menu: res.data
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }


//change scraped menu based on selection
  handleChange(event) {
    event.preventDefault()

    const { toggled, restaurant } = this.state;
    const { value } = event.target;

    this.setState({
      restaurant: value
    });

    axios.post('/api/scraper', { restaurant: value })
    .then((res) => {
      this.setState({
        menu: res.data,
        toggled: [],
        cart: []
      })
    })
    .catch((er) => {
      console.log(er)
    })
  };



//change color of items selected
  toggleItem(index, itemName, event) {
    const { toggled, restaurant } = this.state

    this.setState({
      toggled: toggled.indexOf(index) > -1 ?
        [...toggled.filter(item => item != index)] :
        [...toggled, index]
    })
  };

  // deleteItem(event) {
  //   event.preventDefault()

  //   const {value} = event.target.item;

  //   axios.post('/api/delete', {value})
  //   .then(() => {
  //     for (let i=0; i<this.state.cart.length; i++) {
  //       let { balance, item } = this.state.cart[i]

  //       if (item === value) {
  //         this.state.cart.splice(i, 1);
  //         this.setState({ cart: this.state.cart })
  //         this.setState({ balance: this.state.balance - balance })
  //       }
  //     }
  //   })
  //   .catch((er) => {
  //     console.log(er)
  //   })
  // };


//clear cart, balance, and close modal
  clearSelection() {
    this.setState({
      isModalOpen: false,
      cart: [],
      balance: 0
    })
  }


//get toggled info and send to modal
  handleModal() {
    axios.get('/api/user/current').then(res => {
      if (res.data.username) {
        const { menu, toggled } = this.state
        const theOrder = menu.filter((val, index) => toggled.indexOf(index) > -1)

          this.setState({
            isLoggedIn: true,
            cart: theOrder,
            balance: (10 * (theOrder.length)),
            isModalOpen: true
        })
      } else {
        this.setState({
          isModalOpen: true,
          isLoggedIn: false })
      }
    })
  }


  render() {
    return (
      <div>
        <select value={this.state.restaurant} onChange={this.handleChange} className="menu-selection">
          <option value='dairyqueen'>Dairy Queen</option>
          <option value='subway'>Subway</option>
        </select>

        <button onClick={() => this.handleModal() } >Submit</button>

        <ul>
          {this.state.menu.map((item,index) =>
            <div key={_.uniqueId()}
              className={ this.state.toggled.indexOf(index) > -1 ? "menu toggled" : "menu" }
              onClick={(e) => this.toggleItem(index, item.name, e) }
            >

              <img key={_.uniqueId()} src={item.image} />
              <li key={_.uniqueId()} >{item.name}</li>

            </div>
          )}
        </ul>

        <Modal {...this.state}
          clearSelection={ this.clearSelection } />
      </div>
    )
  }
}

export default Scraper
