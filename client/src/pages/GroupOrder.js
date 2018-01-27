//dependencies
import React from 'react'
import axios from 'axios'

class GroupOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      group: ''
    }
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  //get all orders for group
  componentDidMount() {
    axios.get('/api/user/group-orders')
    .then((res) => {
      const { name, data } = res.data

      this.setState({
        orders: data,
        group: name
      })
    })
    .catch((er) => {
      console.debug(er)
    })
  }

  //allow admin to delete orders from database
  deleteOrder(item, user) {
    axios.post('/api/delete', { value: item, userid: user })
    .then(res => {
      this.setState({ orders: res.data });
    })
  }

  render() {
    return(
      <div className='pageWrap main'>
        <div className=''>
          <h2 className='pageTitle'> { this.state.group }'s order</h2>
        </div>

        <div className='ulContainer'>
          <ul>

            {this.state.orders.map(item =>
              <li className='liContainer' key={item._id}>
                <button
                  type='submit' value={item.item}
                  className='delete-btn'
                  onClick={() => this.deleteOrder(item.item, item.userid)}>
                  <b>✗</b>
                </button>

                <div className='block'>
                  <p className='orderLi'> User: {item.name.first} {item.name.last} </p>
                  <p className='orderLi'> Order: {item.item} </p>
                </div>
              </li>
            )}

          </ul>
        </div>
      </div>
    )
  }
}


export default GroupOrder
