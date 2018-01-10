import React from 'react'
import Scraper from '../Scraper'



class MyOrder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  addItem2(event) {
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


  // <ol>
  //         {this.state.cart.map(item =>
  //           <div>
  //             <li>{this.props.cart}</li>
  //           </div>
  //         )}
  //         <b>Balance: {this.state.balance}</b>
  //       </ol>


  render () {
    return (
      <div>

        { this.state.cart }

      </div>


    )
  }

}

export default MyOrder
