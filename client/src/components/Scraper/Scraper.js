import React from 'react'
import axios from 'axios'
import lodash from 'lodash'
import MenuList from '../MenuList'
import MenuListItem from '../MenuList'
import './Scraper.css'

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      restaurant: '',
      cart: [],
      balance: 0,
      toggled: {}
    };
    //this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleItem = this.toggleItem.bind(this);

  }

  componentWillMount() {
    const { toggled, restaurant } = this.state
    this.setState({ restaurant: 'dairyqueen' });

    if (!toggled[restaurant]) {
      toggled[restaurant] = [];
    };

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

    const { handler } = this.props;
    const { value } = event.target;

    this.setState({ restaurant: value });

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

  // handleClick(event) {
  //  event.preventDefault()

  //   const { handler } = this.props;
  //   const { value } = event.target;

  //   this.setState({value});

  //   console.log("==============================")
  //   console.log(value);
  //   console.log("==============================")

  //   axios.post('/api/scraper', {value})
  //   .then((res) => {
  //     handler(res.data)
  //     this.setState({
  //       menu: res.data,
  //     })
  //   })
  //   .catch((er) => {
  //     console.log(er)
  //   })
  // };

     /*                      */
    //                        \\
   //*\\\\\\\\\\\\////////////*\\
  //***\TOGGLES HIGHLIGHTING/***\\
  toggleItem(index, itemName, event) {
    const { toggled, restaurant } = this.state

    let currentCart = toggled[restaurant].indexOf(index) > -1 ?
        [...toggled[restaurant].filter(item => item != index)] :
        [...toggled[restaurant], index]

    // let updateCart = Object.assign({}, this.state.toggled[restaurant]);   //creating copy of object

    console.log("*************************");
    console.log(currentCart);
    console.log("*************************");
    //updateCart.name = currentCart;                        //updating value
    // this.setState({jasper});

    // this.setState(prevState => ({
    // toggled: {
    //     ...prevState.toggled,
    //     [restaurant]: currentCart
    // }

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

    axios.post('/api/add', {theOrder})
    .then(res => {
      const { paid, balance} = res.data
      this.setState({
        toggled: [],
        cart: []
      })
    })
  }


  render() {
    return (
      <div>
        <ol>
          {this.state.cart.map(item =>

            <div key={_.uniqueId()} >
              <li key={_.uniqueId()} >{item.item}</li>

            </div>
          )}
          <b>Balance: {this.state.balance}</b>
        </ol>

        <div className='columns'>

          <div className='column'>
            <h5> Please Select the Restaurant and menu item you would like to order </h5>
          </div>

          <div className='column'>
            <select value={this.state.restaurant} onChange={this.handleChange} className="menu-selection">
              <option value='dairyqueen'>Dairy Queen</option>
              <option value='subway'>Subway</option>
            </select>
          </div>

        </div>

        <ul>

          {this.state.menu.map((item,index) =>
            // <div key={_.uniqueId()} className={ this.state.toggled.indexOf(index) > -1 ? "menu toggled" : "menu" } onClick={(e) => this.toggleItem(index, item.name, e) }>
            <div key={_.uniqueId()} className="menu" onClick={(e) => this.toggleItem(index, item.name, e) }>

              <img key={_.uniqueId()} src={item.image} />

              <li key={_.uniqueId()} >{item.name}</li>


            </div>
          )}
        </ul>
        <button onClick={() => this.handleSubmit()}>Submit</button>

      </div>
    )
  }
}

export default Scraper
