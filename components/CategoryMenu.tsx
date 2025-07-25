import React from 'react';

const categories = [
  { name: 'Hội họa', products: 8, icon: '/images/menu/category/3.png' },
  { name: 'Âm nhạc', products: 6, icon: '/images/menu/category/4.png' },
  { name: 'Anh văn', products: 5, icon: '/images/menu/category/5.png' },
  { name: 'Họa cụ', products: 12, icon: '/images/menu/category/6.png' },
  { name: 'Nhạc cụ', products: 7, icon: '/images/menu/category/7.png' },
  { name: 'Thủ công', products: 9, icon: '/images/menu/category/8.png' },
];

const CategoryMenu = () => {
  return (
    <section className="bg-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <div key={index} className="flex items-center gap-4 min-w-[160px]">
            {/* Icon tròn */}
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center shadow-sm">
              <img src={cat.icon} alt={cat.name} className="w-[100%] h-[100%]" />
            </div>

            {/* Thông tin */}
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-gray-800">{cat.name}</span>
              <span className="text-sm text-gray-500">{cat.products} mục</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
