//dependencies
import React from 'react'

// import DeleteBtn from '../components/DeleteBtn'
import axios from 'axios'

class GroupOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      group: '',
      date: ''
    }
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  componentWillMount() {
    axios.get('/api/user/group-orders')
    .then((res) => {

      const { name, data } = res.data

      this.setState({
        orders: data,
        group: name,
        date: data[0].date
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }

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
          <h2 className='pageTitle'> { this.state.group }'s order for { this.state.date }</h2>
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
                  <p className='orderLi'> Lunch Order: {item.item} </p>

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
