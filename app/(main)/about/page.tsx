'use client';

import React from 'react';
import { useState } from 'react';

const branches = [
  {
    title: '🧭 TRỤ SỞ CHÍNH',
    address: 'Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP. Cần Thơ',
    phone: '029 2384 1822',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4541.686943663755!2d105.70299797564277!3d10.103549990007256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08689890af5ed%3A0xcce75156ab386a3!2zQ8O0bmcgdHkgVE5ISCBUaMOpcCBUw6J5IMSQw7Q!5e1!3m2!1svi!2s!4v1752206614243!5m2!1svi!2s',
  },
  {
    title: '🧭 VP XƯỞNG LIỆU TẠI CẢNG HOÀNG DIỆU',
    address: '27 Lê Hồng Phong, P. Trà An, Q. Bình Thủy, TP. Cần Thơ',
    phone: '0796 65 65 65',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.4769422670254!2d105.73293367350982!3d10.087904056660568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0864d977a2827%3A0xb78081cdf38e3d41!2zMjcgTMOqIEjhu5NuZyBQaG9uZywgQsOsbmggVGh14bu3LCBCw6xuaCBUaOG7p3ksIEPhuqduIFRoxqEgOTAwMDAwLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1753233155464!5m2!1svi!2s',
  },
  {
    title: '🧭 VP ĐẠI DIỆN TẠI CẦN THƠ',
    address: 'Số 44, CMT8, P. Cái Khế, Q. Ninh Kiều, TP. Cần Thơ',
    phone: '029 2384 1822',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.4950137588172!2d105.77225568136178!3d10.053116114555161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089003dec735d%3A0xe7dcfa05598a8bd6!2zVsSDbiBwaMOybmcgxJHhuqFpIGRp4buHbiBUaMOpcCBUw6J5IMSRw7Q!5e1!3m2!1svi!2s!4v1753233238843!5m2!1svi!2s',
  },
  {
    title: '🧭 VP ĐẠI DIỆN TẠI TP HỒ CHÍ MINH',
    address: 'Tầng 4, Tòa nhà số 56, Thủ Khoa Huân, P. Bến Thành, Q.1, TP. Hồ Chí Minh',
    phone: '0787 65 65 65',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d283.243445826837!2d106.696279819562!3d10.77474139333772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3919846f13%3A0xd5c9215afd3e8b59!2zVMOyYSBOaMOgIFZuc3RlZWw!5e1!3m2!1svi!2s!4v1753233276826!5m2!1svi!2s',
  },
];

const AboutPage = () => {
  const [selectedMap, setSelectedMap] = useState(branches[0].map);

  return (
    <div className="font-sans text-[#444]">
      {/* Banner đầu trang sản phẩm */}
      <section className="relative h-[300px] md:h-[300px] w-full">
        <img
          src="/images/slides/10.jpg" // ← thay bằng ảnh bạn upload hoặc đúng path
          alt="Banner sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider">
            Giới thiệu Thép Tây Đô
          </h1>
        </div>
      </section>

      {/* Section: Tổng quan */}
      <section className="bg-[#f7f7f7] py-16 px-6 text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="bg-[#009fe3] text-white font-semibold py-2 px-5 text-sm uppercase rounded-md inline-block mb-6 shadow-md">
              Giới thiệu chung
            </div>
            <p className="text-lg leading-relaxed">
              Với tổng công suất hàng trăm nghìn tấn thép mỗi năm, <strong>Thép Tây Đô</strong> áp dụng công nghệ lò cao hiện đại, dây chuyền sản xuất khép kín từ nguyên liệu đến thành phẩm. Sản phẩm đáp ứng tiêu chuẩn kỹ thuật khắt khe, sẵn sàng phục vụ các công trình trọng điểm quốc gia và xuất khẩu ra thị trường quốc tế.
            </p>
          </div>
          <div>
            <div className="overflow-hidden rounded-lg shadow-md aspect-video">
              <img src="/images/slides/11.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Lĩnh vực hoạt động */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#009fe3] mb-6">Lĩnh vực hoạt động</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Sản xuất thép xây dựng', 'Dây chuyền hiện đại, đạt tiêu chuẩn kỹ thuật cao.'],
              ['Nguyên vật liệu công nghiệp', 'Cung cấp phôi thép và các vật liệu đầu vào.'],
              ['Gia công cơ khí chính xác', 'Đáp ứng nhu cầu trong công nghiệp và xây dựng.'],
            ].map(([title, desc], idx) => (
              <div key={idx} className="bg-[#f9f9f9] p-6 rounded shadow hover:shadow-md transition">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Sản phẩm */}
      <section className="bg-[#f7f7f7] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#009fe3] mb-10 text-center">
            Sản phẩm chủ lực
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Thép cuộn trơn',
                desc: 'Đường kính D6 - D10, độ bền cao, dễ gia công',
                img: '/products/cuon-tron.jpg',
              },
              {
                name: 'Thép gân xây dựng',
                desc: 'Tiêu chuẩn CB300-V, CB400-V, đường kính D10 - D40',
                img: '/products/gan-xaydung.jpg',
              },
              {
                name: 'Thép ống công nghiệp',
                desc: 'Ống tròn, vuông, chữ nhật; đa dạng kích thước',
                img: '/products/ong-congnghiep.jpg',
              },
              {
                name: 'Cơ khí chế tạo',
                desc: 'Sản phẩm gia công cơ khí theo yêu cầu dự án',
                img: '/products/cokhi-chetao.jpg',
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#009fe3] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Section: Lịch sử hình thành */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#009fe3] mb-12 text-center">
            Lịch sử hình thành
          </h2>

          <div className="relative">
            {/* Trục chính giữa */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

            {/* Timeline items */}
            {[
              {
                year: '2004',
                title: 'Thành lập công ty',
                desc: 'Thép Tây Đô chính thức được thành lập tại Cần Thơ, định hướng phát triển ngành thép nội địa.',
              },
              {
                year: '2009',
                title: 'Mở rộng nhà máy',
                desc: 'Đầu tư dây chuyền sản xuất mới, tăng công suất lên hơn 50.000 tấn/năm.',
              },
              {
                year: '2015',
                title: 'Đạt chứng nhận ISO',
                desc: 'Áp dụng hệ thống quản lý chất lượng ISO 9001:2015 vào toàn bộ hoạt động sản xuất.',
              },
              {
                year: '2023',
                title: 'Xuất khẩu quốc tế',
                desc: 'Sản phẩm được xuất khẩu sang các thị trường Đông Nam Á, khẳng định thương hiệu Việt.',
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className={`mb-12 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
              >
                {idx % 2 === 0 ? (
                  <>
                    {/* Left item */}
                    <div className="md:w-1/2 md:pr-8 text-right">
                      <div className="bg-[#f7f7f7] p-6 rounded-lg shadow-md inline-block">
                        <h4 className="text-md font-bold text-[#009fe3]">{event.year}</h4>
                        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-700">{event.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-0">
                      <div className="bg-[#009fe3] rounded-full shadow-md z-[2] border-[#009fe3] border-[10px]
"></div>
                    </div>
                    <div className="md:w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2" />
                    <div className="hidden md:flex items-center justify-center w-0">
                      <div className="bg-[#009fe3] rounded-full shadow-md z-[2] border-[#009fe3] border-[10px]
"></div>
                    </div>
                    {/* Right item */}
                    <div className="md:w-1/2 md:pl-8 text-left">
                      <div className="bg-[#f7f7f7] p-6 rounded-lg shadow-md inline-block">
                        <h4 className="text-md font-bold text-[#009fe3]">{event.year}</h4>
                        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-700">{event.desc}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Section: Địa chỉ trụ sở */}
      {/* <section className="bg-[#f7f7f7] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#009fe3] mb-8 text-center">
            Trụ sở & Chi nhánh
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-md shadow-sm border-l-4 border-orange-500">
              <h3 className="text-sm text-green-700 font-bold uppercase flex items-center gap-2">
                🧭 TRỤ SỞ CHÍNH
              </h3>
              <p className="text-sm mt-1">
                <strong>Địa chỉ:</strong> Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP. Cần Thơ
              </p>
              <p className="text-sm">
                <strong>Hotline:</strong> 029 2384 1822
              </p>
            </div>

            <div className="bg-white p-5 rounded-md shadow-sm border-l-4 border-orange-500">
              <h3 className="text-sm text-green-700 font-bold uppercase flex items-center gap-2">
                🧭 VP XƯỞNG LIỆU TẠI CẢNG HOÀNG DIỆU
              </h3>
              <p className="text-sm mt-1">
                <strong>Địa chỉ:</strong> 27 Lê Hồng Phong, P. Trà An, Q. Bình Thủy, TP. Cần Thơ
              </p>
              <p className="text-sm">
                <strong>Hotline:</strong> 0796 65 65 65
              </p>
            </div>

            <div className="bg-white p-5 rounded-md shadow-sm border-l-4 border-orange-500">
              <h3 className="text-sm text-green-700 font-bold uppercase flex items-center gap-2">
                🧭 VP ĐẠI DIỆN TẠI CẦN THƠ
              </h3>
              <p className="text-sm mt-1">
                <strong>Địa chỉ:</strong> Số 44, CMT8, P. Cái Khế, Q. Ninh Kiều, TP. Cần Thơ
              </p>
              <p className="text-sm">
                <strong>Hotline:</strong> 029 2384 1822
              </p>
            </div>

            <div className="bg-white p-5 rounded-md shadow-sm border-l-4 border-orange-500">
              <h3 className="text-sm text-green-700 font-bold uppercase flex items-center gap-2">
                🧭 VP ĐẠI DIỆN TẠI TP HỒ CHÍ MINH
              </h3>
              <p className="text-sm mt-1">
                <strong>Địa chỉ:</strong> Tầng 4, Tòa nhà số 56, Thủ Khoa Huân, P. Bến Thành, Q.1, TP. Hồ Chí Minh
              </p>
              <p className="text-sm">
                <strong>Hotline:</strong> 0787 65 65 65
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="bg-[#f7f7f7] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#009fe3] mb-8 text-center">
            Trụ sở & Chi nhánh
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Danh sách chi nhánh */}
            <div className="space-y-6">
              {branches.map((item, idx) => {
                const isActive = selectedMap === item.map;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedMap(item.map)}
                    className={`p-5 rounded-md shadow-sm border-l-4 cursor-pointer transition-all
        ${isActive ? 'bg-indigo-100 border-indigo-500' : 'bg-white border-orange-500 hover:bg-gray-50'}`}
                  >
                    <h3 className={`text-sm font-bold uppercase flex items-center gap-2 ${isActive ? 'text-indigo-700' : 'text-green-700'
                      }`}>
                      {item.title}
                    </h3>
                    <p className="text-sm mt-1">
                      <strong>Địa chỉ:</strong> {item.address}
                    </p>
                    <p className="text-sm">
                      <strong>Hotline:</strong> {item.phone}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* Bản đồ bên phải */}
            <div className="w-full h-[500px] rounded overflow-hidden shadow-md">
              <iframe
                title="Google Maps"
                src={selectedMap}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
