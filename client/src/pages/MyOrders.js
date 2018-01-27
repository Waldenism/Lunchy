import React from 'react'
import axios from 'axios'

class MyOrders extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  //get user order information/history
  componentDidMount() {
    axios.get('/api/user/my-orders')
    .then((res) => {
      this.setState({
        orders: res.data
      })
    })
    .catch((err) => {
      console.debug(err)
    })
  }

  render() {
    return(
      <div className='pageWrap main'>
        <div>
          <h2 className='pageTitle'> Order History for { this.props.user.username } </h2>
        </div>
        <div className='ulContainer'>
          <ul>

            {this.state.orders.map(orders => (
              <li className='liContainer' key={orders._id}>
                <div className='block'>
                  <p className='orderLi'> You ordered a { orders.item } </p>
                  <p className='orderLi'> On { orders.date } </p>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    )
  }
}

export default MyOrders
