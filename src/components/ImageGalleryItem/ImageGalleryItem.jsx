import React from 'react';
import s from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image }) => {
//   console.log('image', image);
  return (
    <li className={s.galleryItem}>
      {/* photo: {image.id} */}
          <img src={image.webformatURL} alt={ image.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
