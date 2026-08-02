import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/images/men-1.jpg',
    alt: 'Men fashion collection',
    tag: 'Trending now',
    title: 'Fresh arrivals for men',
    description: 'Premium essentials for everyday dressing.',
  },
  {
    image: '/images/women-1.jpg',
    alt: 'Women fashion collection',
    tag: 'New season',
    title: "Women's style edit",
    description: 'Curated looks from the latest global drops.',
  },
  {
    image: '/images/studio-1.jpg',
    alt: 'Studio exclusives',
    tag: 'Exclusive',
    title: 'Studio curated picks',
    description: "Editor's favorites designed to stand out.",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function showSlide(index) {
    setCurrent((index + slides.length) % slides.length);
  }

  return (
    <section className="hero-section" aria-label="Promotional carousel">
      <div className="carousel">
        <button
          type="button"
          className="carousel-btn prev"
          aria-label="Previous slide"
          onClick={() => showSlide(current - 1)}
        >
          &#10094;
        </button>
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`carousel-slide${index === current ? ' active' : ''}`}
            >
              <img src={slide.image} alt={slide.alt} />
              <div className="carousel-caption">
                <span>{slide.tag}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="carousel-btn next"
          aria-label="Next slide"
          onClick={() => showSlide(current + 1)}
        >
          &#10095;
        </button>
        <div className="carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`carousel-dot${index === current ? ' active' : ''}`}
              data-slide={index}
              onClick={() => showSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
