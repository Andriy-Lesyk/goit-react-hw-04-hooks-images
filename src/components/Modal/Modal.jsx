import { useEffect } from 'react';
import { Mod, Overlay } from './Modal.styles';
import PropTypes from 'prop-types';

export default function Modal({ onClose, modal }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <Mod>
        <img src={modal} alt="foto" />
      </Mod>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
};
