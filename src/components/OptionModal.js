import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
//    real boolean value 
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleModalClose}
    contentLabel="Selected Option"
   //  closeTimeoutMS={200}
    className='modal'
    ariaHideApp={false}
    >
       <h3>Selected Option</h3>
       {props.selectedOption && <p>{props.selectedOption}</p>}
       <button onClick={props.handleModalClose}>Okay</button>
   </Modal>
)
export default OptionModal;