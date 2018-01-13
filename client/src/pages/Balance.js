import React from 'react'

class Balance extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      balance: []
    }
  }

  render() {
    return(
      <div className='pageWrap'>
          
          <div>
            <h2 className='pageTitle'> Balance for USERNAME:{/* USERNAME */} </h2>
          </div>

          <div className='ulContainer'>
            {this.state.balance.length ? (
              <ul>
                {this.state.balance.map(balance => (
                  <li className='liContainer' key={balance._id}>
                    <nav className='level'>

                      <a href={'' + balance._id}>
                      
                      </a>
                    </nav>
                  </li>
                ))}  
              </ul>
            ) : (
              <h3> No Results to Display</h3>
            )}
          </div>        

      </div>
    )
  }
}

export default Balance