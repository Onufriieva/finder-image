

// const ImageGalleryItem = () => {
//     return(
//         <li >
//           <img src="" alt="" />
//         </li>
//     )
// };

// export default ImageGalleryItem;


// import PropTypes from 'prop-types';

// const ImageGalleryItem = ({ hits, modal }) => {
//   return (
//     hits.map(hit => 
//       <li key={hit.id} >
//       <img  src={hit.webformatURL} alt={hit.tags}  onClick={(e)=> modal(e, hit.largeImageURL, hit.tags)} loading='lazy' />
//   </li>
//   )
//   )
// };



// export default ImageGalleryItem;

import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItemStyled';

const ImageGalleryItem = ({ image, name, largeImg, onClick }) => {
  return (
    <GalleryItem onClick={() => onClick(largeImg)}>
      <GalleryImg src={image} alt={name} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;