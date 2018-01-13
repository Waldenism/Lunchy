//dependencies
import React from 'react'

//components

// import DeleteBtn from '../components/DeleteBtn'
import axios from 'axios'



class GroupOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  componentWillMount() {
    axios.get('/api/user/group-orders')
    .then((res) => {
      this.setState({
        orders: res.data
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }

  deleteOrder(id) {
    const { value } = id.target
    console.log(this.state.orders)

    axios.post('/api/delete', { value: value })
    .then(res => {
      this.setState({ orders: res.data });
      console.log('+++++++++++++++++++++++++++++++++++++++++')
      console.log(this.state.orders)
    }

    )

  }

  // componentDidMount() {
  //   this.loadOrders()
  // }

  // loadOrders() {
  //   //get orders

  //   axios.get('/api/delete')
  //     .then((res) => {
  //       console.log(res)
  //       this.setState({ orders: res.data })
  //     })
  //     .catch((er) => {
  //       console.log(er)
  //     })
  // }

  render() {
    return(

      <div className='pageWrap'>

        <div className='container'>
          <h2 className='pageTitle'> Final Group Order </h2>
        </div>

        <div className='ulContainer'>
          <ul>
            {this.state.orders.map(item =>
              <li className='liContainer' key={item._id}>
                <nav className='level'>

                  <div className='level-item'>
                    <div className='block'>

                      <p className='orderLi'> User ID: {item._id} </p>
                      <p className='orderLi'> Lunch Order: {item.item} </p>

                    </div>
                    
                  </div>                  

                  <div className='level-item'>
                    <button type='submit' value={item.item} className='delete-btn button is-danger' onClick={this.deleteOrder}>
                      ✗
                    </button>
                  </div>

                </nav>
              </li>
            )}
          </ul>

        </div>

      </div>
    )
  }
}


export default GroupOrder
