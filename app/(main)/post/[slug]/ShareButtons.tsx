// components/ShareButtons.tsx (client component)
'use client'

import { FaPrint, FaFacebookF, FaLink, FaFacebookMessenger } from 'react-icons/fa'
import ZaloIcon from '@/components/ui/icon'

export default function ShareButtons() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <button
        onClick={() => window.print()}
        className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        title="Print"
      >
        <FaPrint size={18} />
      </button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(shareUrl)
          alert('Link copied!')
        }}
        className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
        title="Copy Link"
      >
        <FaLink size={18} />
      </button>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
        title="Share on Facebook"
      >
        <FaFacebookF size={18} />
      </a>

      <a
        href={`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=YOUR_APP_ID&redirect_uri=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#00B2FF] text-white hover:opacity-90 transition"
        title="Send via Messenger"
      >
        <FaFacebookMessenger size={18} />
      </a>

      <a
        href={`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-[#e3e3e3a1] text-white hover:opacity-90 transition"
        title="Share via Zalo"
      >
        <ZaloIcon size={18} />
      </a>
    </div>
  )
}
