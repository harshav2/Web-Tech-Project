import React, { useState, useEffect } from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";

function Gallery() {
  const galleryLength = 15;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  useEffect(() => {
    // Use setInterval to change the image every 3 seconds (adjust as needed)
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryLength - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(slideshowInterval);
  }, [currentImageIndex]);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Explore the Moments of Fitness and Wellness at VitalityVoyage. Journey
        through our gallery to witness the dedication, passion, and achievements
        of our incredible community.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article
                key={index}
                style={{
                  display: index === currentImageIndex ? "block" : "none",
                }}
              >
                <img src={image} alt={`GalleryImage ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;
