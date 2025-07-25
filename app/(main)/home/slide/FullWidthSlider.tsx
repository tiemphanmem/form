'use client';

import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

const slides = [
  {
    imageUrl: '/images/slides/1.jpg',
  },
  {
    imageUrl: '/images/slides/2.jpg',
  },
  {
    imageUrl: '/images/slides/3.jpg',
  },
  {
    imageUrl: '/images/slides/4.jpg',
  },
  {
    imageUrl: '/images/slides/5.jpg',
  },
  {
    imageUrl: '/images/slides/6.jpg',
  },
  {
    imageUrl: '/images/slides/7.jpg',
  },
  {
    imageUrl: '/images/slides/8.jpg',
  },
  {
    imageUrl: '/images/slides/9.jpg',
  },
  {
    imageUrl: '/images/slides/10.jpg',
  },
  {
    imageUrl: '/images/slides/11.jpg',
  },
  {
    imageUrl: '/images/slides/12.jpg',
  },
  {
    imageUrl: '/images/slides/13.jpg',
  },
  {
    imageUrl: '/images/slides/14.jpg',
  },
  {
    imageUrl: '/images/slides/15.jpg',
  },
  {
    imageUrl: '/images/slides/16.jpg',
  },
  {
    imageUrl: '/images/slides/17.jpg',
  },
  {
    imageUrl: '/images/slides/18.jpg',
  },
];

const FullWidthSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative">
      <div className="overflow-hidden h-[500px] md:h-[800px] relative">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-10"
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white bg-black/30 hover:bg-black/50 p-2 rounded-full z-10"
        >
          <MdNavigateNext />
        </button>
      </div>
    </section>
  );
};

export default FullWidthSlider;
