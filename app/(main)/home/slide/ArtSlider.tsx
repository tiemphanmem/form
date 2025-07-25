'use client';

import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

const slides = [
  {
    title: 'Thép Tây Đô',
    description:
      'Thép đã tôi thế đấy',
    imageUrl: '/images/slides/1.jpg',
    buttonText: 'Liên hệ ngay',
  },
  // Các ảnh tiếp theo (nội dung giữ nguyên):
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/1.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/2.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/3.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/4.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/6.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/5.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/7.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/8.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/9.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/10.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/11.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/12.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/13.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/14.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/15.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/16.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/17.jpg',
    buttonText: '',
  },
  {
    title: '',
    description: '',
    imageUrl: '/images/slides/18.jpg',
    buttonText: '',
  },


  // ...
];

const ArtSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % (slides.length - 1)); // -1 vì index 0 là text cố định
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1));
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 giây

    return () => clearInterval(interval); // Clear khi unmount
  }, []);

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-4 items-center relative">
        {/* LEFT - Cố định nội dung */}
        <div>
          <span className="bg-[#F7941D] text-white px-2 py-1 text-sm rounded">
            Đơn vị sản xuất và cung cấp thép hàng cầu ĐBSCL
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#004A36]">
            {slides[0].title}
          </h1>

          <p className="mt-4 text-gray-700 text-lg mb-6">
            {slides[0].description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => alert('Chuyển đến trang đăng ký')}
              className="bg-[#005a42] hover:bg-[#00a176] text-white px-6 py-3 rounded-md font-medium transition"
            >
              {slides[0].buttonText}
            </button>

            <button
              onClick={() => alert('Chuyển đến cửa hàng')}
              className="bg-[#F7941D] hover:bg-[#e87c0f] text-white px-6 py-3 rounded-md font-medium transition"
            >
              Mua hàng
            </button>
          </div>
        </div>

        {/* RIGHT - Slide ảnh */}
        {/* RIGHT COLUMN - Cột ảnh + slogan bên trên */}
        <div className="relative">
          {/* Slide ảnh */}
          <div className="relative overflow-hidden rounded-xl shadow-lg h-[400px]">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.slice(1).map((slide, index) => (
                <img
                  key={index}
                  src={slide.imageUrl}
                  alt="Slide"
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
        </div>

      </div>
    </section>
  );
};

export default ArtSlider;
