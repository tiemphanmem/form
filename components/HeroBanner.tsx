'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const images = [
  '/images/banner/slide1.jpg',
  '/images/banner/slide2.jpg',
  '/images/banner/slide3.jpg',
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#FFE7CB] py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-6">
        {/* Left: Static Text */}
        <div>
          <span className="bg-[#F7941D] text-white px-2 py-1 text-sm rounded">
            100% Chất lượng - Sáng tạo
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#EF4036]">
            Phát triển Tư duy & Cảm xúc với ART KEY
          </h1>

          <p className="mt-4 text-gray-700 text-lg mb-4">
            Đăng ký các lớp hội họa, âm nhạc, tiếng Anh thiếu nhi – nơi trẻ em khám phá và phát triển toàn diện qua nghệ thuật.
          </p>

          <Link
            href="/painting-program"
            className="mt-6 inline-block bg-[#EF4036] hover:bg-[#C9352B] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Đăng ký ngay
          </Link>
        </div>

        {/* Right: Image Slider */}
        <div className="relative w-full h-[360px] overflow-hidden rounded-lg shadow-lg">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 text-gray-700 p-2 rounded-full hover:bg-white shadow"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 text-gray-700 p-2 rounded-full hover:bg-white shadow"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
