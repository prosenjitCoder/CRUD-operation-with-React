import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui modals visible active dimmer'>
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard active visible modal'
      >
        <div className='header'>{props.title}</div>
        <div className='content'>
          <p>{props.content}</p>
        </div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
