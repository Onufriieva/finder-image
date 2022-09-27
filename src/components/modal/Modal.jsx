// import React, {Component} from "react";
// import { createPortal } from "react-dom";
// import { BackdropDiv, ModalDiv } from "./ModalStyled";

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {

 

//     componentDidMount() {
//       window.addEventListener('keydown', this.handleKeyDown)
//   };

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown)
//     };


//     handleKeyDown = e => {
//       if(e.code === 'Escape') {
//         this.props.onClose()
//       }       
//     };

//     closeBackdropClick = e => {
//         if(e.currentTarget === e.target) {
//             this.props.onClose()
//         }
//     }


//     render() {
//         return createPortal(
//             <BackdropDiv onClick={this.closeBackdropClick}>
//                 <ModalDiv>
//                   <img src={this.props} alt="" />
//                 </ModalDiv>
//             </BackdropDiv>,
//           modalRoot,
//         )
//     }
// };


import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './ModalStyled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleClose}>
        <StyledModal>{this.props.children}</StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};