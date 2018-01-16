//dependencies
import React from 'react'

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

  deleteOrder(item, e) {
    e.preventDefault()
    const { value }  = item

    axios.post('/api/delete', { value: value })
    .then(res => {
      this.setState({ orders: res.data });
    })
  }

  render() {
    return(

      <div className='pageWrap main'>

        <div className=''>
          <h2 className='pageTitle'> Final Group Order </h2>
        </div>

        <div className='ulContainer'>
          <ul>
            {this.state.orders.map(item =>
              <li className='liContainer' key={item._id}>
                <nav className='level'>

                  <div className='level-item'>
                    <button
                      type='submit' value={item.item}
                      className='delete-btn'
                      onClick={(e) => this.deleteOrder(item.item, e)}>
                      ✗
                    </button>
                  </div>

                  <div className='level-item'>
                    <div className='block'>

                      <p className='orderLi'> User: {item.name.first} {item.name.last} </p>
                      <p className='orderLi'> Lunch Order: {item.item} </p>

                    </div>

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
