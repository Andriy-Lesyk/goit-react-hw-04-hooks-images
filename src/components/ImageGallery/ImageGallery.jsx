import React from 'react';
import PropTypes from 'prop-types';
import { ImageGaller } from './ImageGallery.styles';
import ImageGallaryItem from '../ImageGalleryItem/ImageGallaryItem';

export default function ImageGallery({ imageArray }) {
  return (
    <div>
      <ImageGaller>
        {imageArray.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGallaryItem
            key={id}
            srcWeb={webformatURL}
            modal={largeImageURL}
          />
        ))}
      </ImageGaller>
    </div>
  );
}

ImageGallery.propTypes = {
  imageArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
