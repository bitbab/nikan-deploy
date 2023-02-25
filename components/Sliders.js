import { useState, useEffect } from 'react';

export default function Sliders() {
  const slides = [
    {
      image: '/img/banner/slide1.webp',
      title: 'First slide label',
      description:
        'Some representative placeholder content for the first slide.',
    },
    {
      image: '/img/banner/slide2.webp',
      title: 'Second slide label',
      description:
        'Some representative placeholder content for the second slide.',
    },
    {
      image: '/img/banner/slide3.webp',
      title: 'Third slide label',
      description:
        'Some representative placeholder content for the third slide.',
    },
    {
      image: '/img/banner/slide4.webp',
      title: 'Fourth slide label',
      description:
        'Some representative placeholder content for the fourth slide.',
    },
    {
      image: '/img/banner/slide5.webp',
      title: 'Fifth slide label',
      description:
        'Some representative placeholder content for the fifth slide.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % slides.length);
    }, 5000); // change the time interval to your desired autoplay speed
    return () => clearInterval(interval);
  }, [activeIndex, slides.length]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-60 h-24 sm:h-80 lg:h-96 max-w-7xl max-h-96 sm:w-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            className={`absolute top-0 h-24 w-80 max-w-7xl max-h-96 sm:w-full sm:h-full p-3 rounded-md transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ zIndex: index === activeIndex ? 1 : 0 }}
            src={slide.image}
            alt={slide.title}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-full py-2 md:py-4 mt-1 px-4 bg-slate-100">
        <div className="flex items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full mx-2 focus:outline-none ${
                index === activeIndex ? 'bg-rose-700' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
