
import './Scraper.css'

import React from 'react'
import axios from 'axios'

import lodash from 'lodash'
import _ from 'lodash'

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
      isModalOpen: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
    }


  componentWillMount() {
    this.setState({
      restaurant: 'subway'
    });
  }

  componentDidMount() {
    this.menus();
  }

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


  handleChange(event) {
    event.preventDefault()

    const { toggled, restaurant } = this.state;
    const { handler } = this.props;
    const { value } = event.target;

    this.setState({
      restaurant: value,
      toggle: [],
      cart: []
    });

    axios.post('/api/scraper', { restaurant: value })
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


  toggleItem(index, itemName, event) {
    const { toggled, restaurant } = this.state

    this.setState({
      toggled: toggled.indexOf(index) > -1 ?
        [...toggled.filter(item => item != index)] :
        [...toggled, index]
    })
  };


  deleteItem(event) {
    event.preventDefault()

    const {value} = event.target.item;

    axios.post('/api/delete', {value})
    .then(() => {
      for (let i=0; i<this.state.cart.length; i++) {
        let { balance, item } = this.state.cart[i]

        if (item === value) {
          this.state.cart.splice(i, 1);
          this.setState({ cart: this.state.cart })
          this.setState({ balance: this.state.balance - balance })
        }
      }
    })
    .catch((er) => {
      console.log(er)
    })
  };


  handleSubmit(event) {

    const { menu, toggled } = this.state
    const theOrder = menu.filter((val, index) => toggled.indexOf(index) > -1)

    console.log("---------------------------------")
    console.log(theOrder);

    axios.post('/api/add', {theOrder})
    .then(res => {
      const { paid, balance} = res.data
      this.setState({
        toggled: [],
        cart: []
      })
    })

    this.setState({ isModalOpen: true })
    this.setState({ cart: theOrder })
    // this.setState({ balance: balance + 10 * theOrder.length})
  }


  render() {
    return (
      <div>

        {/*
        <ol>
          {this.state.cart.map(item =>

            <div key={_.uniqueId()} >
              <li key={_.uniqueId()} >{item.item}</li>

            </div>
          )}
          <b>Balance: {this.state.balance}</b>
        </ol>
        */}

        <select value={this.state.restaurant} onChange={this.handleChange} className="menu-selection">
          <option value='subway'>Subway</option>
          <option value='dairyqueen'>Dairy Queen</option>
        </select>
        
        <button onClick={() => this.handleSubmit()}>Submit</button>
        
        <ul>

          {this.state.menu.map((item,index) =>
            <div key={_.uniqueId()} className={ this.state.toggled.indexOf(index) > -1 ? "menu toggled" : "menu" } onClick={(e) => this.toggleItem(index, item.name, e) }>

              <img key={_.uniqueId()} src={item.image} />
              <li key={_.uniqueId()} >{item.name}</li>

            </div>

          )}
        </ul>
        

        <Modal
          isOpen={this.state.isModalOpen}
          onClose={() => { this.setState({ isModalOpen: false }) }}
        >
          <h1>Your Order</h1>

          <ol>
            {
              this.state.cart.map(item => (
                <div key={_.uniqueId()}>
                  <li key={_.uniqueId()}>{item.name}</li>
                </div>
              ))
            }
            <strong>Balance: {this.state.balance}</strong>
          </ol>

          <button onClick={() => { this.setState({ isModalOpen: false }) }}>Edit Order</button>
          <button onClick={() => { this.setState({ isModalOpen: false }) }}>Place Order</button>

        </Modal>

      </div>
    )
  }
}

export default Scraper
