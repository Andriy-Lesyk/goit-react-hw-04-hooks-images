import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { ImageGalleryIt, ImageGalleryItemImg } from './ImageGalleryItem.styles';

export default function ImageGalleryItem({ srcWeb, modal }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <ImageGalleryIt onClick={openModal}>
        <ImageGalleryItemImg src={srcWeb} alt="foto" />
      </ImageGalleryIt>
      {showModal && (
        <Modal modal={modal} showModal={showModal} onClose={closeModal} />
      )}
    </div>
  );
}

ImageGalleryItem.propTypes = {
  srcWeb: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
};
