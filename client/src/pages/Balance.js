//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

class Balance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      //balance
    }

  }

  componentDidMount() {
    //axios get balance
    //then set state
  }

  

  render() {
    return(
      <div>
        
          <h1> Balance of all my orders </h1>
          <h2> test </h2>        

      </div>
    )
  }
}

export default Balance