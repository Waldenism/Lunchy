//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
import DeleteBtn from '../components/DeleteBtn'
import MenuList from '../components/MenuList'
import MenuListItem from '../components/MenuList'


class GroupOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }

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
  //   axios.get('./orders')
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
      <div>
        
          <h1> Final Group Order </h1>
          <h2> every users order compiled </h2>

          <br /><br /><br /><br /><br />

          {this.state.orders.length ? (
            <MenuList>
              {this.state.orders.map(orders => (
                <MenuListItem key={order._id}>
                  <a href={'' + orders._id}>
                    {orders}
                  </a>
                  <DeleteBtn onClick={() => this.deleteOrder(order._id)} />
                </MenuListItem>
              ))}  
            </MenuList>
          ) : (
            <h3> No Results to Display</h3>
          )}
                
      </div>
    )
  }
}

export default GroupOrder