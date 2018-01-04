<<<<<<< HEAD
// import React from 'react'
// import axios from 'axios'

// class Scraper extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       menu: [],
//     }

//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit(e) {
//     e.preventDefault()

//     const { handler } = this.props

//     axios.post('/api/scraper/subway')
//     .then((res) => {
//       handler(res.data)
//       this.setState({
//         menu: res.data
//       })
//     })
//     .catch((er) => {
//       console.log(er)
//     })
//   }


//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <input name="getMenu" type="hidden" className="form-control"></input>
//           </div>
//           <input type="submit" value='Submit' className="btn btn-warning btn-lg"></input>
//         </form>

//         <ul>
//           {this.state.menu.map(function(item) {
//             return <li>{item}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// export default Scraper
=======
import React from 'react'
import axios from 'axios'

class Scraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      value: 'subway'
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {

    const { handler } = this.props
    const {value} = event.target;

    this.setState({value});

    axios.post('/api/scraper', {value})
    .then((res) => {
      handler(res.data)
      this.setState({
        menu: res.data
      })
    })
    .catch((er) => {
      console.log(er)
    })
  }


  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange} className="menu-selection">
          <option value='subway'>Subway</option>
          <option value='dairyqueen'>Dairy Queen</option>
        </select>

        <ul>
          {this.state.menu.map(item =>
            <div>
              <li>{item.name}</li>
              <img src={item.image} />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Scraper
>>>>>>> d2ec718a664592ff49c6d96b7a83d2022cff4dc8
