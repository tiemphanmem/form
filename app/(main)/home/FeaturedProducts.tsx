import React from 'react';


const FeaturedProducts = () => {
  return (
    <>
      {/* Section: Tầm nhìn – Sứ mệnh – Giá trị cốt lõi */}
      {/* Section: Tầm nhìn – Sứ mệnh */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tiêu đề */}
          <div className="relative inline-block mb-4">
            <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
              Tầm nhìn sứ mệnh
            </div>
            {/* <div className="absolute right-0 top-0 w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-[#009fe3] border-b-[40px] border-b-transparent -mt-[20px]"></div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Hình ảnh bên trái */}
            <div className="flex justify-center">
              <img
                src="/images/home/4P3A0521.jpg" // 👉 thay bằng hình ảnh bạn đã upload
                alt="Tầm nhìn - Sứ mệnh"
                className="max-w-full h-auto"
              />
            </div>

            {/* Nội dung bên phải */}
            <div className="space-y-8 text-sm text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-2">Tầm nhìn</h3>
                <p>
                  Trở thành doanh nghiệp thép hàng đầu Việt Nam và vươn tầm khu vực, tiên phong trong ứng dụng công
                  nghệ hiện đại và thực hành phát triển xanh bền vững. Thép Tây Đô hướng tới vị thế là biểu tượng của uy tín,
                  chất lượng và đổi mới sáng tạo trong ngành thép, góp phần định hình một tương lai thịnh vượng và thân
                  thiện với môi trường cho ngành công nghiệp vật liệu xây dựng.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Sứ mệnh</h3>
                <p>
                  Cung cấp cho thị trường sản phẩm thép xây dựng đạt chất lượng cao với dịch vụ chuyên nghiệp, đáp ứng tối
                  đa nhu cầu của khách hàng. Chúng tôi không ngừng đổi mới công nghệ và nâng cao hiệu quả vận hành
                  nhằm tạo ra giá trị vượt trội, đồng thời đảm bảo sản xuất an toàn và thân thiện với môi trường. Song song
                  đó, Thép Tây Đô xây dựng môi trường làm việc nhân văn và công bằng, đề cao sự phát triển của mỗi cá nhân,
                  lấy con người làm trọng tâm cho sự phát triển lâu dài. Sứ mệnh của chúng tôi còn là đóng góp tích cực cho
                  cộng đồng – từ việc chung tay xây dựng những công trình vững chắc phục vụ xã hội đến các hoạt động từ
                  thiện, phát triển cộng đồng – qua đó khẳng định vai trò của Thép Tây Đô trong sự phát triển bền vững của
                  đất nước.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Giá trị cốt lõi */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tiêu đề */}
          <div className="relative inline-block mb-4">
            <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
              Giá trị cốt lõi
            </div>
            {/* <div className="absolute right-0 top-0 w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-[#009fe3] border-b-[40px] border-b-transparent -mt-[20px]"></div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Văn bản bên trái */}
            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h3 className="font-bold uppercase mb-2">Khách hàng là trọng tâm – Luôn hướng tới sự hài lòng của khách hàng.</h3>
                <p>

                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase mb-2">Chất lượng hàng đầu – Cam kết sản phẩm đạt tiêu chuẩn quốc tế.</h3>
                <p>

                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase mb-2">Đổi mới sáng tạo – Ứng dụng công nghệ hiện đại, cải tiến liên tục.</h3>
                <p>

                </p>
              </div>

              <div>
                <h3 className="font-bold uppercase mb-2">Phát triển bền vững – Kết hợp kinh doanh với bảo vệ môi trường.</h3>
                <p>

                </p>
              </div>
            </div>

            {/* Hình ảnh mô phỏng diamond value */}
            <div className="flex justify-center">
              <img
                src="/images/home/AD3K0712.jpg" // 👉 thay bằng đúng tên ảnh bạn tải lên
                alt="Giá trị cốt lõi"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default FeaturedProducts;
