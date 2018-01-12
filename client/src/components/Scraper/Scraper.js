import React from 'react'
import axios from 'axios'
import Modal from '../Modal/Modal'
import _ from 'lodash'
import './Scraper.css'

class Scraper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menu: [],
      value: '',
      cart: [],
      balance: 0,
      toggled: [],
      isModalOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
  }

  componentDidMount () {
    this.menus()
  }

  menus () {
    axios.post('/api/scraper', {value: 'subway'})
      .then((res) => {
        this.setState({
          menu: res.data
        })
      })
      .catch((er) => {
        console.log(er)
      })
  }

  handleChange (event) {
    event.preventDefault()

    const { handler } = this.props
    const { value } = event.target

    this.setState({value})

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

  handleClick (event) {
    event.preventDefault()

    const { handler } = this.props
    const { value } = event.target

    this.setState({value})

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

  toggleItem (index, itemName, event) {
    const { toggled } = this.state

    this.setState({
      toggled: toggled.indexOf(index) > -1
        ? [...toggled.filter(item => item !== index)]
        : [...toggled, index]
    })
  }

  handleSubmit (event) {
    const { menu, toggled, balance } = this.state

    const theOrder = menu
      .filter((val, index) =>
        toggled.indexOf(index) > -1
      )

    this.setState({ isModalOpen: true })
    this.setState({ cart: theOrder })
    this.setState({ balance: balance + 10 * theOrder.length})

    console.log(`THE ORDER: ${JSON.stringify(theOrder)}`)
  }

  render () {
    return (
      <div>

        <div className='columns'>
          <div className='column'>
            <h5> Please Select the Restaurant and menu item you would like to order </h5>
          </div>

          <div className='column'>
            <select value={this.state.value} onClick={this.handleClick} onChange={this.handleChange} className='menu-selection'>
              <option onClick={this.handleClick} value='subway'>Subway</option>
              <option value='dairyqueen'>Dairy Queen</option>
            </select>
          </div>
        </div>

        <ul>
          {this.state.menu.map((item, index) =>
            <div
              key={_.uniqueId()}
              className={this.state.toggled.indexOf(index) > -1 ? 'menu toggled' : 'menu'}
              onClick={(e) => this.toggleItem(index, item.name, e)}
            >
              <img key={_.uniqueId()} src={item.image} />
              <li key={_.uniqueId()} >{item.name}</li>
            </div>
          )}
        </ul>
        <button onClick={() => this.handleSubmit()}>Submit</button>
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
