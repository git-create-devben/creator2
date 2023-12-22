import Image from 'next/image';
import { useState, useEffect } from 'react';
import "./light.css"


interface LightboxProps {
  images: string[];
}

const Lightbox: React.FC<LightboxProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  const selectImage = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="lightbox-container shadow-2xl">
      <div className="default-view">
        <Image
        width={800}
        height={300}
          src={images[selectedImage]}
          alt={`Image ${selectedImage + 1}`}
          className="max-h-default-view"
        />
           <div className="thumbnail-container">
        {images.map((image, index) => (
          <Image
          width={80}
          height={50}
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === selectedImage ? 'selected' : ''}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
      </div>
   
    </div>
  );
};

export default Lightbox;
