//dependencies
import React from 'react'
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
        <div className='pageWrap'>        

          <Scraper handler = { this.handleScraper } />

        </div>
      </div>
    )
  }
}

export default Home