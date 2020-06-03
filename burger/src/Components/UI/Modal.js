import React from 'react';
import Classes from './Modal.module.css';
import Aux from '../../HOC/Auxillary';
import Backdrop from '../UI/Backdrop/Backdrop';
const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={Classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Aux>
);
export default Modal;
