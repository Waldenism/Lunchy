//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

class GroupsOrder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }

  }

  componentDidMount() {
    this.loadOrders()
  }
  
  // loadOrders = () => {
  //   //get orders
  //   axios.get()
  //     .then((res) => {
  //       console.log(res)
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

      </div>
    )
  }
}

export default GroupsOrder