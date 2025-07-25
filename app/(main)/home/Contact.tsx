'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Post = {
  _id: string;
  path?: string;
  title: string;
  subtitle?: string;
  content?: string;
  image?: string;
  date?: string;
  createDate?: string;
};

const ContactForum = () => {

  return (
    <section className="text-white">

      {/* Đăng ký tư vấn */}
      <div className="bg-gradient-to-r from-cyan-700 to-emerald-600 py-[50px] px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 text-white px-4 pt-[50px] pb-[50px]">
          <h2 className="text-3xl md:text-4xl font-bold">LIÊN HỆ TƯ VẤN</h2>
          <p className="text-yellow-200 text-lg font-medium">
            Nhận thông tin báo giá – Tư vấn sản phẩm nhanh chóng
          </p>
          <p className="text-white text-sm md:text-base font-bold">
            Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại với quý khách trong thời gian sớm nhất.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
            <input
              type="text"
              placeholder="Họ tên khách hàng..."
              className="p-3 rounded-md w-full text-gray-800 bg-white"
            />
            <input
              type="text"
              placeholder="Công ty / Đơn vị..."
              className="p-3 rounded-md w-full text-gray-800 bg-white"
            />
            <input
              type="text"
              placeholder="Số điện thoại..."
              className="p-3 rounded-md w-full text-gray-800 bg-white"
            />
            <input
              type="email"
              placeholder="Email liên hệ..."
              className="p-3 rounded-md w-full text-gray-800 bg-white"
            />
          </form>

          <div className="mt-6">
            <button className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold px-6 py-2 rounded-full text-base hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
              GỬI THÔNG TIN
            </button>
          </div>
        </div>
      </div>


      {/* Google Map nhúng */}
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#009fe3] mb-10 border-b-2 border-[#009fe3] inline-block mt-10">
          Trụ sở chính
        </h2>

        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4541.686943663755!2d105.70299797564277!3d10.103549990007256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08689890af5ed%3A0xcce75156ab386a3!2zQ8O0bmcgdHkgVE5ISCBUaMOpcCBUw6J5IMSQw7Q!5e1!3m2!1svi!2s!4v1752206614243!5m2!1svi!2s"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForum;
