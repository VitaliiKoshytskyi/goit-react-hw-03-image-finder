// import PropTypes from 'prop-types'

import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ tag,webformatURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
          <img className={css.ImageGalleryItem_image} src={webformatURL} alt={tag}  />
    </li>
  );
};

export default ImageGalleryItem;
