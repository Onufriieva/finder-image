import { GalleryImg, GalleryItem } from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {
    return(
        <GalleryItem onClick={() => onClick(largeImageURL)}>
          <GalleryImg src={webformatURL} alt={tags}/>
        </GalleryItem>
    )
};

export default ImageGalleryItem;
