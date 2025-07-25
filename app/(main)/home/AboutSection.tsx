import React from 'react';
import { FaPlay } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-16 px-6 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="bg-[#009fe3] text-white font-semibold py-2 px-5 text-sm uppercase rounded-md inline-block mb-6 shadow-md">
            Giới thiệu chung
          </div>
          <p className="text-lg leading-relaxed">
            Thép Tây Đô được biết đến là Doanh nghiệp hàng đầu về lĩnh vực sản xuất và kinh doanh các sản phẩm về Thép xây dựng tại ĐBSCL.

            Được thành lập từ năm 1995 và đi vào hoạt động từ năm 1997 với Công suất ban đầu 120.000T/năm

            Đầu năm 2022, Thép Tây Đô từng bước mở rộng Quy mô sản xuất và kinh doanh.
            Với tiêu chí chất lượng là mục tiêu và lợi ích của người dùng là yếu tố sống còn của Doanh nghiệp, các sản phẩm thép của THÉP TÂY ĐÔ đã và đang được nhiều nhà đầu tư tin tưởng sử dụng cho các công trình trọng điểm ở ĐBSCL.
          </p>
          <div className="mt-5">
            <a href="/about" className="inline-flex items-center text-sm font-semibold text-[#009fe3] hover:underline hover:translate-x-1 transition duration-200">
              XEM THÊM <span className="ml-1">▶</span>
            </a>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-lg shadow-md aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mgRCwTPyc2o?si=26xpM3Cw0Sz-iNc5"
              title="Giới thiệu công ty"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
