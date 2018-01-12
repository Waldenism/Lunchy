//dependencies
import React from 'react'

//components
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
  //   axios.get('./balance')

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
      <div className='pageWrap'>
        
          <h2> Balance of all my orders </h2>

          {this.state.balance.length ? (
            <ul>
              {this.state.balance.map(balance => (
                <li key={balance._id}>
                  <a href={'' + balance._id}>
                    
                  </a>
                </li>
              ))}  
            </ul>
          ) : (
            <h3> No Results to Display</h3>
          )}        

      </div>
    )
  }
}

export default Balance