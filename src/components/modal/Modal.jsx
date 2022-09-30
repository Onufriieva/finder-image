import React, {Component} from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { BackdropDiv, ModalDiv } from "./ModalStyled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

 

    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown)
  };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };


    handleKeyDown = e => {
      if(e.code === 'Escape') {
        this.props.onClose()
      }       
    };

    closeBackdropClick = e => {
        if(e.currentTarget === e.target) {
            this.props.onClose()
        }
    }


    render() {
        return createPortal(
            <BackdropDiv onClick={this.closeBackdropClick}>
                <ModalDiv>
                  {this.props.children }
                </ModalDiv>
            </BackdropDiv>,
          modalRoot,
        )
    }
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node
}