'use client';

import React, { useEffect, useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

const logos = [
  '/images/cert/1491229936chung-nhan-iso-14001.jpg',
  '/images/cert/iso-1.png',
  '/images/cert/iso-2.png',
  '/images/cert/jis-LOGO.jpg',
  '/images/cert/quacert.png'
];

const LogoSliderAuto: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const itemWidth = 140; // Ước lượng mỗi logo khung (bao gồm margin)

  const next = () => {
    setOffset((prev) => (prev + 1) % logos.length);
  };

  const prev = () => {
    setOffset((prev) => (prev - 1 + logos.length) % logos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const extended = [...logos, ...logos.slice(0, 5)];

  return (
    <section className="bg-[#f4f4f4] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6 text-center text-[#014935]">
          Chứng nhận sản phẩm
        </h3>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${offset * itemWidth}px)`,
              width: `${extended.length * itemWidth}px`,
            }}
          >
            {extended.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-2"
                style={{ width: itemWidth }}
              >
                <div className="border border-gray-300 rounded bg-white p-2 hover:shadow transition h-[80px] flex items-center justify-center">
                  <img
                    src={src}
                    alt={`Logo ${i}`}
                    className="max-h-[60px] h-full w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 text-xl bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 text-xl bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSliderAuto;
