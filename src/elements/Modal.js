import React from 'react';

const Modal = ({ show, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;