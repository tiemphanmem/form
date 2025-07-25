'use client'

import { useState } from 'react'
import { FaPhoneAlt, FaTimes, FaBars } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiZalo } from 'react-icons/si'
import { Facebook } from 'lucide-react';

export default function ContactIcons() {
  const [isOpen, setIsOpen] = useState(true)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const handleClose = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsAnimatingOut(false)
    }, 300)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const iconList = (
    <div
      className={`fixed right-4 top-2/3 z-50 flex flex-col items-center space-y-3 transition-all duration-300
        ${isAnimatingOut ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
      `}
    >
      {/* Zalo */}
      <a
        href="https://zalo.me/4302711393088819871"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-blue-400 text-blue-500 rounded-full p-3 shadow-md hover:scale-110 transition-transform animate-wiggle-skew"
      >
        <SiZalo size={24} />
      </a>

      <a
        href="https://www.facebook.com/CongtyThepTayDo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border-2 border-blue-400 text-blue-500 rounded-full p-3 shadow-md hover:scale-110 transition-transform animate-wiggle-skew"
      >
        <Facebook size={24} className='bg-blue text-blue' />
      </a>

      {/* Email */}
      <a
        href="mailto:sales@theptaydo.com"
        className="bg-yellow-400 text-white rounded-full p-3 shadow-md hover:scale-110 transition-transform animate-wiggle-skew"
      >
        <MdEmail size={24} />
      </a>

      {/* Phone */}
      <a
        href="tel:02923841822"
        className="bg-green-500 text-white rounded-full p-3 shadow-md hover:scale-110 transition-transform animate-wiggle-skew"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Close */}
      <button
        onClick={handleClose}
        className="bg-orange-400 text-white rounded-full p-3 shadow-md hover:scale-110 transition-transform"
      >
        <FaTimes size={20} />
      </button>
    </div>
  )

  return (
    <>
      {/* Nút mở lại */}
      {!isOpen && !isAnimatingOut && (
        <button
          onClick={handleOpen}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-wiggle-skew"
        >
          <FaBars size={20} />
        </button>
      )}

      {/* Danh sách icon */}
      {(isOpen || isAnimatingOut) && iconList}
    </>
  )
}
