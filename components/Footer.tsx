import React from 'react';
import {
  FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope,
  FaFacebookF, FaGooglePlusG, FaYoutube, FaEnvelopeOpen
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#014935] text-sm leading-relaxed">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-100">
        {/* Trụ sở chính */}
        <div>
          <h4 className="text-yellow-300 font-semibold text-lg mb-3">Trụ sở chính</h4>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#F7941D]" />
              Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP. Cần Thơ
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#F7941D]" /> +84.2923.841822
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#F7941D]" /> sales@theptaydo.com
            </p>
          </div>
        </div>

        {/* VP Cảng Hoàng Diệu */}
        <div>
          <h4 className="text-yellow-300 font-semibold text-lg mb-3">VP Xưởng Liệu Tại Cảng Hoàng Diệu</h4>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#F7941D]" />
              27 Lê Hồng Phong, P. Trà An, Q. Bình Thủy, TP. Cần Thơ
            </p>
            <p className="flex items-center gap-2">
              <FaFax className="text-[#F7941D]" /> +84.796 65 65 65
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#F7941D]" /> sales@theptaydo.com
            </p>
          </div>
        </div>

        {/* VP đại diện tại Cần Thơ */}
        <div>
          <h4 className="text-yellow-300 font-semibold text-lg mb-3">VP đại diện tại Cần Thơ</h4>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#F7941D]" />
              Số 44, CMT8, P. Cái Khế, Q. Ninh Kiều, TP. Cần Thơ
            </p>
            <p className="flex items-center gap-2">
              <FaFax className="text-[#F7941D]" /> +84.2923.841822
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#F7941D]" /> sales@theptaydo.com
            </p>
          </div>
        </div>

        {/* VP đại diện TP.HCM */}
        <div>
          <h4 className="text-yellow-300 font-semibold text-lg mb-3">VP đại diện tại TP.HCM</h4>
          <div className="space-y-2">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#F7941D]" />
              Tầng 4, Tòa nhà số 56, Thủ Khoa Huân, P. Bến Thành, Q.1, TP.HCM
            </p>
            <p className="flex items-center gap-2">
              <FaFax className="text-[#F7941D]" /> +84.787.65.65.65
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#F7941D]" /> sales@theptaydo.com
            </p>
          </div>
        </div>

        {/* Pháp lý & Mạng xã hội */}
        <div>
          <h4 className="text-yellow-300 font-semibold text-lg mb-3">Kết nối & Pháp lý</h4>
          <div className="space-y-2">
            <p>GPKD số: <strong>1800156657</strong></p>
            <p>Ngày cấp: 27/06/2008</p>
            <p>Nơi cấp: Sở KH & ĐT TP. Cần Thơ</p>
            <p>Tổng Giám Đốc: <strong>Huỳnh Trung Quang</strong></p>
          </div>
          <div className="flex gap-4 mt-4 text-white text-lg">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
            <FaGooglePlusG className="hover:text-yellow-300 cursor-pointer" />
            <FaEnvelopeOpen className="hover:text-yellow-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#013426] py-4 px-4 md:px-[100px] text-white flex flex-col md:flex-row justify-between items-center text-xs">
        <p className="text-center">
          Copyright © 2022 <strong>THÉP TÂY ĐÔ</strong>. ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Điều khoản sử dụng</a>
          <a href="#" className="hover:underline">Chính sách bảo mật</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
