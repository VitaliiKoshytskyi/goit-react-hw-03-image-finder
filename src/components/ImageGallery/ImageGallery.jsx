// import PropTypes from 'prop-types'

import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

import css from './ImageGallery.module.css'

const ImageGallery = ({ images }) => {
    
    const element = images.map(image => (<ImageGalleryItem key={image.id} tag={image.tag} webformatURL={image.webformatURL} />))

    return (
        <ul className={css.ImageGallery}>
            {element}
        </ul>
    )
}


export default ImageGallery