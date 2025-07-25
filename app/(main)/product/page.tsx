'use client';

import React from 'react';

const products = [
  {
    name: 'PHÔI THÉP',
    image: '/images/products/phoi-thep.jpg', // Thay bằng đường dẫn thực tế
    info: {
      'Kích cỡ': '130x130x6m; 130x130x12m; 150x150x6m; 150x150x12m',
      'Tiêu chuẩn': 'JIS (Nhật Bản), ASTM (Hoa Kỳ), BS (Anh), TCVN (Việt Nam)...',
      'Bề mặt': 'Bóng, không rạn nứt, không có lỗ khí',
      'Tiết diện': 'Vuông đều',
      'Ứng dụng': 'Dùng để sản xuất các loại thép cán nóng thông dụng',
    },
    actions: [
      { label: 'CATALOGUE', className: 'bg-[#0063A7]', url: '/catalogue.pdf' },
      { label: 'MUA HÀNG', className: 'bg-[#f26522]', url: '/lien-he' },
      // { label: 'CHI TIẾT', className: 'bg-[#007a2d]', url: '/products/billet' },
    ],

  },
  {
    name: 'THÉP THANH VẰN',
    image: '/images/products/thep-thanh-van.jpg',
    info: {
      'Kích cỡ': 'D10–D41',
      'Tiêu chuẩn': 'JIS (Nhật Bản), ASTM (Hoa Kỳ), BS (Anh), TCVN (Việt Nam)...',
      'Bề mặt': 'Bóng, không rạn nứt, không có lỗ khí',
      'Tiết diện': 'Có gờ, hình tròn đều',
      'Ứng dụng': 'Dùng để thi công kết cấu bê tông cốt thép, xây dựng dân dụng & công nghiệp',
    },
    actions: [
      { label: 'CATALOGUE', className: 'bg-[#0063A7]', url: '/catalogue-thep-thanh-van.pdf' },
      { label: 'MUA HÀNG', className: 'bg-[#f26522]', url: '/lien-he' },
      { label: 'CHI TIẾT', className: 'bg-[#007a2d]', url: '/products/thep-thanh-van' },
    ],
  },
  {
    name: 'THÉP CUỘN',
    image: '/images/products/thep-cuon.jpg', // Thay bằng đường dẫn thực tế
    info: {
      'Kích cỡ': 'Φ 6, Φ8, D8 gai, Φ10 Đường kính ngoài cuộn: Φ 1,2 m',
      'Tiêu chuẩn': 'JIS (Nhật Bản), ASTM (Hoa Kỳ), BS (Anh), TCVN (Việt Nam)...',
      'Bề mặt': 'Sáng bóng',
      'Tiết diện': 'Rất tròn, độ ôvan nhỏ',
      'Trọng lượng cuộn': '1000kg – 2100kg',
      'Đường kính ngoài cuộn': 'Φ 1,2 m',
    },
    actions: [
      { label: 'CATALOGUE', className: 'bg-[#0063A7]', url: '/catalogue.pdf' },
      { label: 'MUA HÀNG', className: 'bg-[#f26522]', url: '/lien-he' },
      // { label: 'CHI TIẾT', className: 'bg-[#007a2d]', url: '/products/wire-rod' },
    ],
  },
];

const ProductPage = () => {
  return (
    <>
      {/* Banner đầu trang sản phẩm */}
      <section className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/images/slides/12.jpg" // ← thay bằng ảnh bạn upload hoặc đúng path
          alt="Banner sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider">
            Sản phẩm Thép Tây Đô
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="space-y-12">
            {products.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-10"
              >
                <div className="flex-1 rounded overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex-1 text-sm text-[#444]">
                  <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                  <div className="space-y-1 border border-gray-100 divide-y divide-gray-100">
                    {Object.entries(item.info).map(([label, value]) => (
                      <div
                        key={label}
                        className="flex bg-white hover:bg-gray-50 transition"
                      >
                        <div className="w-40 px-3 py-2 font-semibold text-[#009fe3]">
                          {label}
                        </div>
                        <div className="flex-1 px-3 py-2">{value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    {item.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.url}
                        className={`${action.className} text-white px-4 py-1.5 text-sm font-semibold rounded inline-block`}
                        target="_blank" // Nếu bạn muốn mở trong tab mới
                        rel="noopener noreferrer"
                      >
                        {action.label}
                      </a>

                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
