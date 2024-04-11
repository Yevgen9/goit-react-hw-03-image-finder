import React from 'react';
import s from './ImageGallery.module.scss';

const ImageGallery = ({ images }) => {
  console.log('images', images);
  return (
    <div>
      <ul className={s.gallery}></ul>
    </div>
  );
};

// ImageGallery.propTypes = {

// }

export default ImageGallery;
