export default function Banner({ image }) {
  return (
    <div className="image-wrapper">
      <img src={image.src} alt={image.alt} className="current-image" />
      <h2 className="image-caption">{image.alt}</h2>
    </div>
  );
}
