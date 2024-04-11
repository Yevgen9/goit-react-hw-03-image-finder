import React from 'react';
import s from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  //   console.log('images', images);
  return (
    <>
      <ul className={s.gallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </>
  );
};

// ImageGallery.propTypes = {

// }

export default ImageGallery;
