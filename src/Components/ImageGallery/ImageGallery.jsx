import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ pic }) => {
  return (
    <Gallery>
      {pic.map(image => (
        <ImageGalleryItem key={image.webformatURL} item={image} />
      ))}
    </Gallery>
  );
};
