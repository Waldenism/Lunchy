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
