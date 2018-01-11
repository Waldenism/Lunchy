//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import DeleteBtn from '../components/DeleteBtn'
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
  //   axios.post('', {id: id})
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

      <div>

        <h1> Final Group Order </h1>
        <h2> every users order compiled </h2>

        <br /><br /><br /><br /><br />

        <MenuList>
          {this.state.orders.map(item =>
            <MenuListItem key={item.userid}>
                {item.item}
            </MenuListItem>
          )}
        </MenuList>

      </div>
    )
  }
}


export default GroupOrder
