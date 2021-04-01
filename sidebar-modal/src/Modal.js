import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {AppContext, useGlobalContext} from './context.js'

const Modal = () => {
  const { isModalopen, closeModal } = useGlobalContext();
  return (
    <div className={`${isModalopen ? 'modal-overlay show-modal':'modal-overlay'}`}>
      <div className='modal-container'>
        <h3>
          modal content
        </h3>
        <button className='close-modal-btn' onClick={closeModal}>
           <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
