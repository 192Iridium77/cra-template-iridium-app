export default function ImageGallery({ images, numberOfColumns }) {
  const columnsClass = `w-${numberOfColumns}/12`;
  return (
    <div className="flex flex-wrap items-center">
      <div className={columnsClass}>
        {images.map(
          (image) =>
            image &&
            image.src && (
              <img src={image.src} alt={image.alt || "Gallery Image"} />
            )
        )}
      </div>
    </div>
  );
}
