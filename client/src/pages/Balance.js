//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'
// import MenuList from '../components/MenuList'
// import MenuListItem from '../components/MenuList '
import { MenuList, MenuListItem } from "../components/MenuList"

class Balance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      balance: []
    }

  }

  // componentDidMount() {
  //   this.loadBalance()
  // }

  // loadBalance = () => {
  //   //get balance
  //   axios.get('')
  //    .then((res) => {
  //      console.log(res)
  //      this.setState({ balance: res.data })
  //    })
  //    .catch((er) => {
  //      console.log(er)
  //    })
  // }

  render() {
    return(
      <div>
        
          <h1> Balance of all my orders </h1>

          <br /><br />BALANCE BREAK<br /><br />



          {this.state.balance.length ? (
            <MenuList>
              {this.state.balance.map(balance => (
                <MenuListItem key={balance._id}>
                  <a href={'' + balance._id}>
                    {/* LODASH function to add all the items in the array together*/}
                  </a>
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

export default Balance