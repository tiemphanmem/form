'use client';

import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const jobList = [
  {
    title: 'Công nhân điện công nghiệp',
    description:
      '- Bảo trì, bảo dưỡng thiết bị điện.\n- Đảm bảo hoạt động của nhà máy.\n- Làm việc theo ca\n- Công việc cụ thể sẽ trao đổi khi phỏng vấn.',
    requirements:
      '- Nam, tuổi từ 22 - 40.\n- Tốt nghiệp Trung cấp/Cao đẳng chuyên ngành điện công nghiệp, điện dân dụng.\n- Có ít nhất 01 năm kinh nghiệm xử lý sự cố về điện trong nhà máy.\n- Ưu tiên ứng viên có kinh nghiệm làm việc tại các nhà máy Luyện – Cán thép.',
    benefits:
      '- Mức lương: từ 12.000.000 đồng - 15.000.000 đồng/tháng tùy theo năng lực.\n-Thưởng các ngày lễ/ Tết.\n- Phát đồ bảo hộ lao động hàng năm.\n- Được tham gia BHXH, BHYT, BHTN theo quy định.\n- Được mua BHTN 24/24.\n- Khám sức khỏe định kỳ hàng năm.\n-  Cơm trưa buffet.\n- Chế độ mừng sinh nhật CBCNV',
    documents:
      '+ Đơn xin việc (không điền theo mẫu) có dán ảnh.\n+ Bảng điểm, các văn bằng có liên quan.\n+ Sơ yếu lý lịch (ghi rõ những kinh nghiệm cũng như những việc đã làm trong thời gian học tập hoặc làm việc).\n+ Giấy khám sức khỏe.\n+ Căn cước công dân.\n- Hồ sơ phải ghi rõ địa chỉ liên lạc, số điện thoại, email (nếu có).\n- Công ty chỉ gọi phỏng vấn các hồ sơ đạt yêu cầu. Không hoàn trả hồ sơ cho ứng viên không được xét tuyển.'
  },
  {
    title: 'Phó phòng kế toán',
    description:
      '• Lập và kiểm soát ngân sách\n• Hỗ trợ kiểm toán nội bộ, quy trình chi phí',
    requirements:
      '• Tốt nghiệp Đại học chuyên ngành kế toán\n• Kinh nghiệm > 3 năm',
    benefits:
      '- Thu nhập cạnh tranh\n- BHXH, phúc lợi đầy đủ',
    documents:
      '- Đơn xin việc\n- CV\n- Giấy khám sức khỏe'
  },
];

const RecruitmentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    file: null as File | null,
  });

  const openDialog = (title: string) => {
    setSelectedJob(title);
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file' && files) {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('phone', form.phone);
    if (form.file) formData.append('file', form.file);
    formData.append('position', selectedJob);
    // await fetch('/api/submit-cv', { method: 'POST', body: formData });
    alert('CV đã được gửi.');
    setIsOpen(false);
  };

  return (
    <div className='text-black'>
      <section className="relative h-[300px] md:h-[200px] w-full">
        <img
          src="/images/slides/13.jpg"
          alt="Tuyển dụng banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">
            Tuyển Dụng Thép Tây Đô
          </h1>
        </div>
      </section>

      <div className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0063A7] mb-10">
          Cơ hội Nghề nghiệp
        </h1>
        <div className="space-y-12">
          {jobList.map((job, idx) => (
            <div key={idx} className="p-6 rounded shadow border border-gray-100 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#f26522] mb-2">{job.title}</h2>
                <p>
                  <strong className="text-[#009fe3]">Mô tả:</strong><br />
                  {job.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </p>
                <p className="mt-2"><strong className="text-[#009fe3]">Yêu cầu:</strong><br />{job.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}</p>
                <p className="mt-2"><strong className="text-[#009fe3]">Quyền lợi:</strong><br />{job.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}</p>
                <p className="mt-2"><strong className="text-[#009fe3]">Hồ sơ:</strong><br />{job.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}</p>
                <button
                  onClick={() => openDialog(job.title)}
                  className="mt-4 bg-[#f26522] text-white px-4 py-2 rounded"
                >
                  Ứng tuyển ngay
                </button>
              </div>
              <div className="w-full md:w-60 flex-shrink-0">
                <img src="/images/recruitment/sample-position.jpg" alt="Ảnh minh họa" className="w-full h-auto object-cover rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* VĂN HÓA DOANH NGHIỆP */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-[#0063A7] mb-4">VĂN HÓA DOANH NGHIỆP</h2>
          <p className="mb-4">Môi trường làm việc với cơ sở vật chất đầy đủ và hiện đại, tác phong chuyên nghiệp, năng động, thân thiện.</p>
          <p className="mb-4">Chế độ đãi ngộ: Mức lương hấp dẫn, du lịch, thưởng hiệu suất, chăm sóc sức khỏe,...</p>
          <p className="italic font-semibold mb-4">"Phúc Lợi Tận Tâm – Động Lực Vươn Xa Cùng Thép Tây Đô"</p>
          <p className="mb-4">Tại Thép Tây Đô, chúng tôi tin rằng con người là tài sản quý giá nhất. Vì vậy, công ty luôn chú trọng xây dựng một môi trường làm việc chuyên nghiệp, thân thiện và đảm bảo các chế độ phúc lợi tốt nhất cho nhân viên...</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Nhà ăn ca tự chọn:</strong> Từ năm 2013, xây dựng nhà ăn buffet đầu tiên trong hệ thống Tổng Công ty Thép Việt Nam tại phía Nam.</li>
            <li><strong>Tặng quà Tết và tổ chức tiệc Tân niên:</strong> Gắn kết đầu năm, thể hiện sự tri ân tới người lao động.</li>
            <li><strong>Chăm lo đời sống nhân viên:</strong> Tổ chức thăm hỏi, khám sức khỏe, phong trào thể thao, học bổng cho con em.</li>
            <li><strong>Hỗ trợ nhà ở:</strong> Từ 2020, hỗ trợ xây 6-8 căn nhà/năm cho nhân viên khó khăn.</li>
          </ul>
        </section>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 text-black">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full p-6 rounded shadow-lg">
            <Dialog.Title className="text-xl font-bold mb-4 text-[#0063A7]">
              Ứng tuyển: {selectedJob}
            </Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Họ tên" required onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
              <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
              <input name="phone" type="tel" placeholder="Số điện thoại" required onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
              <div className='flex'>
                <label className="block mb-1 text-sm font-medium">CV đính kèm <span className="text-xs text-gray-500">(.pdf, .doc, .docx)</span></label>
                <div className="flex items-center gap-3">
                  <label className="bg-[#0063A7] text-white px-3 py-1 text-sm rounded cursor-pointer ml-3">
                    Tải lên
                    <input name="file" type="file" accept=".pdf,.doc,.docx" required onChange={handleChange} className="hidden" />
                  </label>
                  {form.file && <span className="text-xs text-gray-700 truncate max-w-[150px]">{form.file.name}</span>}
                </div>
              </div>
              <button type="submit" className="bg-[#0063A7] text-white px-4 py-2 text-sm rounded mt-2">
                Gửi CV
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default RecruitmentPage;