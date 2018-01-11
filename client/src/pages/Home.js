//dependencies
import React from 'react'

//components
import Hero from '../components/Hero'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

import Scraper from '../components/Scraper'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: []
    }

    this.handleScraper = this.handleScraper.bind(this)
  }

  handleScraper(menu) {
    this.setState({
      menu: menu
    })
  }

  render() {
    return(
      <div>
        
          <h1>Lunchy</h1>        

        <Scraper 
          handler = { this.handleScraper }
        />
        
      </div>
    )
  }
}

export default Home