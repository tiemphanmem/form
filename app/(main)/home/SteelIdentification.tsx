'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

const SteelSignBox = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const items = [
    {
      key: 'brand',
      title: 'Logo thương hiệu',
      desc: 'Biểu tượng 3 mũi tên hướng lên dập nổi – đại diện cho sự phát triển và bền vững của Thép Tây Đô.',
      lineStyle: 'top-[30px] left-[100px] h-[60px] w-[1px]',
      boxStyle: 'top-[0px] left-[40px]',
    },
    {
      key: 'grade',
      title: 'Ký hiệu mác thép',
      desc: 'Một số mác thép không có ký hiệu trên thanh, hoặc ký hiệu bằng dấu chấm để nhận biết.',
      lineStyle: 'top-[30px] right-[120px] h-[60px] w-[1px]',
      boxStyle: 'top-[0px] right-[40px] text-right',
    },
    {
      key: 'logo',
      title: 'Logo Thép Tây Đô',
      desc: 'Chữ "TAY DO" được in nổi trên thanh thép, thể hiện rõ nguồn gốc sản xuất.',
      lineStyle: 'bottom-[30px] left-[100px] h-[60px] w-[1px]',
      boxStyle: 'bottom-[0px] left-[40px]',
    },
    {
      key: 'diameter',
      title: 'Ký hiệu đường kính danh nghĩa',
      desc: 'Kích thước chữ và chiều sâu đảm bảo theo tiêu chuẩn Việt Nam & quốc tế.',
      lineStyle: 'bottom-[30px] right-[120px] h-[60px] w-[1px]',
      boxStyle: 'bottom-[0px] right-[40px] text-right',
    },
  ];

  return (
    <section className="relative bg-white py-12 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-2xl font-bold text-[#014984] mb-6 uppercase">
          Dấu hiệu nhận biết thép Tây Đô
        </h2>

        {/* Image */}
        <div className="relative">
          <img
            src="/images/logo/steel.png"
            alt="Dấu hiệu nhận biết Thép Tây Đô"
            className="w-full rounded-md shadow"
          />

          {/* Lines + labels */}
          {items.map((item) => (
            <React.Fragment key={item.key}>
              {/* Dotted line */}
              <div
                className={clsx(
                  'absolute border-l-2 border-dashed border-gray-400 transition-all duration-300',
                  item.lineStyle,
                  hovered === item.key && 'border-[#0077b6]'
                )}
              ></div>

              {/* Text box */}
              <div
                onMouseEnter={() => setHovered(item.key)}
                onMouseLeave={() => setHovered(null)}
                className={clsx(
                  'absolute max-w-xs text-sm transition-all duration-200 cursor-default',
                  item.boxStyle
                )}
              >
                <div className="font-semibold text-[#014935]">{item.title}</div>
                <div>{item.desc}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Xem thêm */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-[#014935] font-semibold hover:underline inline-flex items-center gap-1"
          >
            Xem thêm <span className="text-lg">▶</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SteelSignBox;
