//stylesheet
import './Scraper.css'

//dependencies
import React from 'react'
import axios from 'axios'

//components
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
      restaurant: 'subway'
    });
  }

  //pull menu
  componentDidMount() {
    this.menus();
  }

  //get menu using scraper
  menus() {
    let { restaurant } = this.state

    axios.post('/api/scraper', { restaurant: restaurant })
    .then((res) => {
      this.setState({
        menu: res.data
      })
    })
    .catch((err) => {
      console.debug(err)
    })
  }


  //change scraped menu based on selection
  handleChange(e) {
    e.preventDefault()

    const { toggled, restaurant } = this.state;
    const { value } = e.target;

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
    .catch((err) => {
      console.ldebug(err)
    })
  };

  //change color of item if selected
  toggleItem(index, itemName, event) {
    const { toggled, restaurant } = this.state

    this.setState({
      toggled: toggled.indexOf(index) > -1 ?
        [...toggled.filter(item => item != index)] :
        [...toggled, index]
    })
  };

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
          <option value='subway'>Subway</option>
          <option value='dairyqueen'>Dairy Queen</option>
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
