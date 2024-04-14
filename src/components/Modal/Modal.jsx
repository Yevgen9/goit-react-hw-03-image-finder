import s from './Modal.module.scss';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const Modal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        Modal Content
        {/* <img src="" alt="" /> */}
        <ImageGalleryItem />
      </div>
    </div>
  );
};

export default Modal;
