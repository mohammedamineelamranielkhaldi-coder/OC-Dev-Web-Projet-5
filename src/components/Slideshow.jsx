import { useState } from "react";
import Arrow from "../assets/VectorCarrousel.png";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  // Si une seule image → pas de flèches, pas de numérotation
  if (total === 1) {
    return (
      <div className="slideshow">
        <img
          src={pictures[0]}
          alt="Logement"
          className="slideshow__image single"
        />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <img
        key={currentIndex}
        src={pictures[currentIndex]}
        alt="Logement"
        className="slideshow__image fade"
      />

      {/* Flèche gauche */}
      <img
        src={Arrow}
        alt="Précédent"
        className="slideshow__arrow left"
        onClick={prevSlide}
      />

      {/* Flèche droite */}
      <img
        src={Arrow}
        alt="Suivant"
        className="slideshow__arrow right"
        onClick={nextSlide}
      />

      {/* Numérotation */}
      <div className="slideshow__counter">
        {currentIndex + 1}/{total}
      </div>
    </div>
  );
}
