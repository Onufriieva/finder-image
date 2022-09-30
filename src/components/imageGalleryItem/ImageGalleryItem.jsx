import PropTypes from 'prop-types';
import { GalleryImg, GalleryItem } from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
    return(
        <GalleryItem onClick={() => onClick(largeImageURL)}>
          <GalleryImg src={webformatURL} alt={tags}/>
        </GalleryItem>
    )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}