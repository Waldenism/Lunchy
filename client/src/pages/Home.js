//dependencies
import React from 'react'
import Scraper from '../components/Scraper'

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className='pageWrap'>
                <Scraper {...this.props} />
                </div>
            </div>
        )
    }
}

export default Home
