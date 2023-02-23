// import PropTypes from 'prop-types'

import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ tag,webformatURL,showModal,largeImageURL}) => {
  return (
    <li className={css.ImageGalleryItem} onClick={() => showModal()}>
          <img className={css.ImageGalleryItem_image} src={webformatURL} alt={tag}  />
    </li>
  );
};

export default ImageGalleryItem;
