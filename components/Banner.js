import Slider from 'react-slick';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Banner() {
  const slides = [
    {
      imageUrl: '/img/banner/slide1.webp',
      linkUrl: '/'
    },
    {
      imageUrl: '/img/banner/slide2.webp',
      linkUrl: '/'
    },
    {
      imageUrl: '/img/banner/slide3.webp',
      linkUrl: '/'
    },
    {
      imageUrl: '/img/banner/slide4.webp',
      linkUrl: '/'
    },
    {
      imageUrl: '/img/banner/slide5.webp',
      linkUrl: '/'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -mt-4 left-0 w-8 h-8 bg-rose-600 rounded-full flex justify-center items-center focus:outline-none z-10"
        onClick={onClick}
      >
        <ChevronLeftIcon className="w-5 h-5 text-slate-50" />
      </button>
    );
  }
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -mt-4 right-0 w-8 h-8 bg-rose-600 rounded-full flex justify-center items-center focus:outline-none z-10"
        onClick={onClick}
      >
        <ChevronRightIcon className="w-5 h-5 text-slate-50" />
      </button>
    );
  }
  return (
    <div className="container mx-auto mt-4 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Link key={index} href={slide.linkUrl}>
            <img
              src={slide.imageUrl}
              alt={`slide ${index + 1}`}
              className="w-full h-auto"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
