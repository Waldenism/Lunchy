//dependencies
import React from 'react'

//components

// import DeleteBtn from '../components/DeleteBtn'
import { MenuList, MenuListItem } from '../components/MenuList'
import axios from 'axios'



class GroupOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }

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

  // deleteOrder = id => {
  //   axios.post('/api/delete', {id: id})
  //   .then(res => this.setState({orders: res}))
  // }

  // componentDidMount() {
  //   this.loadOrders()
  // }

  // loadOrders = () => {
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
    console.log(this.state.orders);
    return(

      <div className='pageWrap'>

        <h2> Final Group Order </h2>


        <ul>
          {this.state.orders.map(item =>
            <li key={item.userid}>

            
                <p> item         {item.item} </p>
                <br />
                <p> ID           {item._id} </p>
                 <br />
                <p> Paid          {item.paid} </p>

              <span >
                ✗
              </span>
                
            </li>
          )}
        </ul>

      </div>
    )
  }
}


export default GroupOrder
