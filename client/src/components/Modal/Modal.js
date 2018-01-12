import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={'modal-container' + (isOpen ? ' open' : '')}>
      <div className='modal-body'>
        <div className='modal-close' onClick={onClose}>x</div>
        <div className='modal-clear' />
        { children }
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  )
}

export default Modal
