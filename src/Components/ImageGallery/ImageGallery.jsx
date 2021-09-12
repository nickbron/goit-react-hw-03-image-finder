export const ImageGallery = ({ pic }) => {
  return (
    <ul className="ImageGallery">
      {pic.map(picture => (
        <li key={picture.id}>{picture}</li>
      ))}
    </ul>
  );
};
