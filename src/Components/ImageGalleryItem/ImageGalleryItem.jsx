import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  return (
    <GalleryItem key={item.id}>
      <GalleryItemImage
        src={item.webformatURL}
        alt=""
        // onClick={() => toggleModal(item)}
      />
    </GalleryItem>
  );
};
