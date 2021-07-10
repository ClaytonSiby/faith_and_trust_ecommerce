/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="theModal">
        {children}
      </div>
    </div>,
  ];
};

Modal.propTypes = {
  hideModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
