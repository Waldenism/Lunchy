import React from 'react'
import axios from 'axios'

class Balance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      user: ''
    }
  }

  componentWillMount() {
    axios.get('/api/user/my-orders')
    .then((res) => {
      const { name, orders } = res.data

      this.setState({
        orders: res.data,
        user: res.data[0].name.first
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }

  render() {
    return(
      <div className='pageWrap main'>
          
        <div>
          <h2 className='pageTitle'> Order History for { this.state.user } </h2>
        </div>

        <div className='ulContainer'>
          <ul>
            {this.state.orders.map(orders => (
              <li className='liContainer' key={orders._id}>

                <div className='block'>

                  <p className='orderLi'> You ordered: { orders.item } </p>
                  <p className='orderLi'> ON DATE: { orders.date } </p>

                </div>
              </li>
            ))}  
          </ul>
            
        </div>        

      </div>
    )
  }
}

export default Balance