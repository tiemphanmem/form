'use client';

import React from 'react';

const leaders = [
  {
    name: 'Conor',
    title: 'Chủ tịch HĐQT',
    img: '/images/conor.jpg',
  },
  {
    name: 'Tyson',
    title: 'Giám đốc Vận hành',
    img: '/images/tyson.jpg',
  },
  {
    name: 'Terry',
    title: 'Giám đốc Tài chính',
    img: '/images/terry.jpg',
  },
  {
    name: 'Mary',
    title: 'Giám đốc Nhân sự',
    img: '/images/mary.jpg',
  },
  {
    name: 'Roger',
    title: 'Trợ lý Tài chính',
    img: '/images/roger.jpg',
  },
  {
    name: 'George',
    title: 'Trợ lý Nhân sự',
    img: '/images/george.jpg',
  },
];

const LeadershipSection = () => {
  return (
    <section className="bg-white text-[#444] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#009fe3] mb-12">
          Ban Lãnh Đạo Công Ty
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9f9] p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#009fe3] shadow mb-4">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#009fe3]">{leader.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
