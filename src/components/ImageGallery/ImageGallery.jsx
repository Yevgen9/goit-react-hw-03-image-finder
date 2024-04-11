import React from 'react';
import s from './ImageGallery.module.scss';

const ImageGallery = props => {
  console.log(props);
  return (
    <div>
      <ul className={s.gallery}></ul>
    </div>
  );
};

export default ImageGallery;
