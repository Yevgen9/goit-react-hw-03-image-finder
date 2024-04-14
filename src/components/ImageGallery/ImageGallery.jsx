import React from 'react';
import s from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onShowModal }) => {
  //   console.log('images', images);
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onShowModal={() => onShowModal(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};

// ImageGallery.propTypes = {

// }

export default ImageGallery;
