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
  const [posts, setPosts] = useState<Post[]>([]);
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  useEffect(() => {
    fetch('http://localhost:4000/api/posts') // 👈 chỉnh lại endpoint nếu khác
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter((p: Post) => p.title && p.content)
          .sort((a: Post, b: Post) =>
            new Date(b.createDate || '').getTime() - new Date(a.createDate || '').getTime()
          );
        setPosts(sorted);
      })
      .catch((err) => {
        console.error('Lỗi khi load bài viết:', err);
      });
  }, []);

  return (
    <section className="text-white">
      {/* DIỄN ĐÀN */}
      <div className="bg-white text-center text-[#444] mt-16 px-4 pb-[50px]">
        <div className="relative inline-block mb-4">
          <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
            Tin tức
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-6xl mx-auto">
          {visiblePosts.map((post) => (
            <Link
              key={post._id}
              href={`/post/${post.path || post._id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={post.image || '/default-thumbnail.jpg'}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-blue-700">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">{post.subtitle || ''}</p>
                  <p className="mt-2 text-xs text-gray-500 italic">
                    {post.date ||
                      new Date(post.createDate || '').toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/post"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition duration-300"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactForum;
