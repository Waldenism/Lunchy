import React from 'react'
import './Modal.css'

import lodash from 'lodash'
import _ from 'lodash'
import axios from 'axios'


class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.modalMessage = this.modalMessage.bind(this);
  }



  handleSubmit(event) {
    axios.post('/api/add', {theOrder: this.props.cart})
    .then(res => {
      this.setState({ submitted: true })
      this.modalMessage();
    })
  }

  modalMessage() {

    if (!this.props.isLoggedIn) {
      return (
        <div>
        <h2> You are not logged in! </h2>
        <button onClick={() => { this.props.clearSelection() }}>Close</button>
        </div>
      )

    } else {
      if (this.state.submitted) {
        return (
          <div>
            <h2>Your order has been sent!</h2>
            <button onClick={() => {
              this.props.clearSelection();
              this.setState({ submitted: false }) }}
            > Close </button>
          </div>
        )

      } else {
        return (
          <div>
            <h2>Confirm Order</h2>
            <ol>
              { this.props.cart.map(item => (
                <div className='liContainer' key={_.uniqueId()}>
                  <li key={_.uniqueId()}>{item.name}</li>
                </div>
              ))}

              <strong>Balance: {this.props.balance}</strong>
            </ol>

            <button onClick={() => { this.props.clearSelection() }}>Edit Order</button>
            <button onClick={() => { this.handleSubmit() }}>Place Order</button>
          </div>
        )
      }
    }

  }


  render() {
    return (
      <div className={'modal-container' + (this.props.isModalOpen ? ' open' : '')}>
        <div className='modal-body'>
          <div className='modal-clear' />

          { this.modalMessage() }

        </div>
      </div>
    )
  }
}

export default Modal
