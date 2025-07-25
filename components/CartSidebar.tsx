'use client';
import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri";

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed top-[112px] right-0 w-[90vw] sm:w-[400px] h-[calc(100vh-112px)] mt-[6px] bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700 ">🛒 Giỏ hàng</h2>
          <button onClick={onClose} className="hidden md:block w-6 h-6 text-gray-600" >
            <RiCloseCircleLine />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 text-gray-600 flex flex-col items-center justify-center h-full">
          <img src="/empty-cart.png" alt="Empty Cart" className="w-24 h-24 mb-2" />
          <p className="text-sm">Không có sản phẩm trong giỏ hàng.</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
            Tiếp tục mua sắm
          </button>
        </div>
      </div >
    </>
  );
};

export default CartSidebar;
