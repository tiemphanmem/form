'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CartSidebar from '@/components/CartSidebar';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FaGlobe } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs'; // Zalo (chat)
import { SiZalo } from 'react-icons/si'
import { GoPerson } from "react-icons/go";
import { FaStreetView } from "react-icons/fa";

import {
  RiMenuFold2Fill,
  RiMenuUnfold2Fill
} from 'react-icons/ri';
import {
  MdShoppingCartCheckout
} from 'react-icons/md';
import {
  FaAngleDown,
  FaLocationDot,
  FaCaretDown,
  FaCaretUp,
  FaPhoneVolume
} from 'react-icons/fa6';
import { GrFavorite } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';

const MAIN_COLOR = '#014935';
const ACCENT_COLOR = '#F7941D';

const MENU_ITEMS = [
  {
    label: 'Trang chủ',
    href: '/'
  },
  {
    label: 'Khóa học',
    submenu: [
      { label: 'Hội họa', href: '/painting-program' },
      { label: 'Âm nhạc', href: '/music-program' },
      { label: 'Anh văn', href: '/english-program' }
    ]
  },
  {
    label: 'Cửa hàng',
    href: '/product'
  },
  {
    label: 'Diễn đàn',
    href: '/forum'
  },
  {
    label: 'Liên hệ',
    href: '/contact'
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 ">
        {/* Topbar */}
        <div className="bg-[#004A36] text-white text-sm py-2 px-4 flex justify-between items-center md:px-[100px]">
          {/* Địa chỉ bên trái */}
          <span className="flex items-center gap-2">
            <FaLocationDot className="text-base" />
            Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP. Cần Thơ
          </span>

          <div className="flex items-center gap-4">
            <a href="https://vrtour.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex">
              <FaStreetView className="text-lg" />
              <span className='ml-2'>Thăm công ty</span>
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 flex">
              <GoPerson className="text-lg" />
              <span className='ml-2'>Đăng nhập</span>
            </a>
            {/* Language dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:opacity-80">
                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.zwxnNZbPMTaM9378uvyE9gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="VN"
                  className="w-5 h-auto rounded-sm border border-white"
                />
                <span>VN</span>
              </button>

              {/* Dropdown */}
              <div className="absolute right-0 top-full bg-white text-gray-800 rounded shadow-md hidden group-hover:block z-50 min-w-[140px]">

                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.zwxnNZbPMTaM9378uvyE9gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="VN" className="w-5 h-auto rounded-sm" />
                  Tiếng Việt
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left">
                  <img src="https://eurotravel.com.vn/wp-content/uploads/2023/05/quoc-ky-dau-tien-cua-nuoc-my-voi-13-sao-dai-dien-cho-13-bang-ngay-so-khai.png" alt="EN" className="w-5 h-auto rounded-sm" />
                  English
                </button>
              </div>
            </div>
          </div>
        </div>




        {/* Desktop Menu */}
        <div className="bg-white border-t border-gray-200 hidden md:flex">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">

            {/* Left: Logo + Slogan */}
            <div className="flex items-center gap-4">
              <img src="/images/logo/Logo_30nam_TTD.png" alt="VNSTEEL" className="w-[100px]" />
              <div className="text-sm text-gray-600 leading-tight">
                <div className="font-bold text-[15px] text-[#333]">
                  CÔNG TY THÉP TÂY ĐÔ
                </div>
                <div className="text-[13px] tracking-wide">
                  THÉP ĐÃ TÔI THẾ ĐẤY
                </div>
              </div>
            </div>

            {/* Center: Main menu */}
            <nav className="flex gap-8 text-[14px] font-semibold text-[#1a1a1a] uppercase">
              <Link href="/" className="hover:text-[#014935]">Trang chủ</Link>
              <Link href="/about" className="hover:text-[#014935]">Giới thiệu</Link>
              <Link href="/product" className="hover:text-[#014935]">Sản phẩm</Link>
              <Link href="/fields" className="hover:text-[#014935]">Lĩnh vực hoạt động</Link>
              <Link href="/hiring" className="hover:text-[#014935]">Tuyển dụng</Link>
              <Link href="/post" className="hover:text-[#014935]">Tin tức</Link>
              <Link href="/shareholders" className="hover:text-[#014935]">Quan hệ cổ đông</Link>
            </nav>
          </div>
        </div>

      </header>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed left-0 w-full top-[112px] h-[calc(100vh-112px)] mt-[10px] z-40 bg-white shadow-md transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="w-full h-full bg-white p-4 shadow-xl pt-[50px]">
          {/* Search */}
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Tìm khóa học hoặc sản phẩm..."
                className="text-gray-700 w-full px-4 py-2 border rounded-l-full focus:outline-none"
              />
              <button className="bg-[#F7941D] text-white px-4 py-2 rounded-r-full">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Menu Items (from shared config) */}
          <nav className="space-y-2 text-base">
            {MENU_ITEMS.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.label)}
                      className="w-full text-left text-gray-700 font-medium flex justify-between items-center"
                    >
                      {item.label}
                      <span>
                        {openSubMenu === item.label ? <FaCaretUp /> : <FaCaretDown />}
                      </span>
                    </button>
                    {openSubMenu === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.href}
                            className="block text-gray-700"
                            onClick={handleLinkClick}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="block text-gray-700"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="text-red-600 font-semibold mt-6">
              <a href="tel:1900989908" className='flex items-center gap-1'>
                <FaPhoneVolume /> Hotline: 1900 98 99 08
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
