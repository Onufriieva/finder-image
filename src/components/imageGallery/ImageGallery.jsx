import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGalleryStyled';


const ImageGallery = ({ images, onClick }) => {
    return (
      <Gallery>
      {images.map(({id, webformatURL, tags, largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                webformatURL={webformatURL}                 
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={onClick}/>            
              )
      )}        
      </Gallery>
    );
  };
  
  export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL:PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })
),
}