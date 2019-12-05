import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
//    real boolean value 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModalClose}
    contentLabel="Selected Option"
    className="modal"
    ariaHideApp={false}
    closeTimeoutMS={200}
    >
       <h3 className='modal__title'>Selected Option</h3>
       {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
       <button className='button' onClick={props.handleModalClose}>Okay</button>
   </Modal>
)
export default OptionModal;