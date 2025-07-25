'use client';

import React, { useState } from 'react';
import '@/styles/SteelSignature.css'; // dùng file CSS riêng để dễ style hơn

const SteelMark = () => {
  return (
    <section className="bg-white py-10 px-4 text-black">
      <div className="max-w-6xl mx-auto relative mt-50 mb-50">
        {/* Steel image */}
        <div className="relative z-0">
          <img
            src="/images/product/steel-hover.png"
            alt="steel"
            className="w-full h-auto"
          />
        </div>

        {/* Logo */}
        <div className="absolute top-[-100px] left-[10%] flex flex-col items-center group">
          <div className="text-center">
            <h3 className="font-bold text-lg">Logo công ty</h3>
            <p className="text-sm text-gray-600">
              Biểu tượng Delta đặc trưng của Thép Tây Đô
            </p>
          </div>
          <div className="border-l-2 border-b-2 border-black h-[80px] w-[80px] mt-2 relative">
            <div className="absolute top-[78px] left-[-40px] w-[60px] h-[60px] border-2 border-dashed border-black group-hover:border-orange-500 animate-none group-hover:animate-dash"></div>
          </div>
        </div>

        {/* Mác thép */}
        <div className="absolute top-[-100px] left-[45%] flex flex-col items-center group">
          <div className="text-center">
            <h3 className="font-bold text-lg">Ký hiệu mác thép</h3>
            <p className="text-sm text-gray-600">
              Ký hiệu mác thép được in nổi trên bề mặt thanh thép
            </p>
          </div>
          <div className="border-r-2 border-b-2 border-black h-[80px] w-[80px] mt-2 relative">
            <div className="absolute top-[78px] left-[-40px] w-[100px] h-[60px] border-2 border-dashed border-black group-hover:border-orange-500 animate-none group-hover:animate-dash"></div>
          </div>
        </div>

        {/* Đường kính */}
        <div className="absolute bottom-[-120px] left-[60%] flex flex-col items-center group">
          <div className="border-r-2 border-t-2 border-black h-[80px] w-[80px] mb-2 relative">
            <div className="absolute bottom-[78px] left-[-10px] w-[60px] h-[60px] border-2 border-dashed border-black group-hover:border-orange-500 animate-none group-hover:animate-dash"></div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg">Ký hiệu đường kính</h3>
            <p className="text-sm text-gray-600">
              Ký hiệu cho biết đường kính thanh thép được in nổi trên sản phẩm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelMark;
