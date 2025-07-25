'use client';

import { useState } from 'react';
import axios from 'axios';
import { UploadCloud } from 'lucide-react';
import Image from 'next/image';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/forms';

export default function SubmitFormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    citizenId: '',
    newAddress: '',
    temporaryAddress: '',
    currentAddress: '',
  });

  const [vnidImage, setVnidImage] = useState<File | null>(null);
  const [showSample, setShowSample] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setVnidImage(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (vnidImage) data.append('vnidImage', vnidImage);

      await axios.post(API_URL, data);
      alert('Gửi thành công!');
      setFormData({ fullName: '', dob: '', citizenId: '', newAddress: '', temporaryAddress: '', currentAddress: '' });
      setVnidImage(null);
    } catch (err: any) {
      console.error(err);
      const message = err?.response?.data?.error || 'Gửi thất bại';
      alert(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-600 via-sky-300 to-sky-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-xl w-full bg-white shadow-xl p-8 rounded-2xl space-y-6 border border-gray-100 text-black">
        <h2 className="text-xl font-semibold text-indigo-700 text-center">Khai báo địa chỉ mới</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Họ tên</label>
            <input name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
            <input name="dob" type="date" value={formData.dob} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số CCCD</label>
            <input name="citizenId" value={formData.citizenId} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ thường trú mới</label>
            <input name="newAddress" value={formData.newAddress} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nơi tạm trú mới (nhập theo dữ liệu hiện trên Căn cước điện tử)</label>
            <input name="temporaryAddress" value={formData.temporaryAddress} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nơi ở hiện tại (nhập theo dữ liệu hiện trên Căn cước điện tử)</label>
            <input name="currentAddress" value={formData.currentAddress} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ảnh CCCD điện tử từ ứng dụng <strong>VNID</strong> (chụp màn hình) <span className="text-red-500">*</span>
            </label>
            <label className="flex items-center gap-2 border rounded-lg px-4 py-3 bg-white shadow-sm cursor-pointer hover:bg-gray-50">
              <UploadCloud className="text-indigo-600" size={20} />
              <span className="text-sm text-gray-700">Chọn ảnh</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                required
              />
            </label>
            {vnidImage && <p className="mt-1 text-sm text-gray-500">Đã chọn: {vnidImage.name}</p>}
            <button type="button" className="text-sm text-blue-600 hover:underline mt-2" onClick={() => setShowSample(true)}>
              Xem mẫu minh họa
            </button>
          </div>

          {showSample && (
            <div className="border p-4 rounded-lg bg-gray-100 text-sm">
              <div className="flex justify-between items-center mb-2">
                <strong>Mẫu ảnh CCCD từ VNID</strong>
                <button onClick={() => setShowSample(false)} className="text-red-500">Đóng</button>
              </div>
              <img src="/sample-vnid.jpg" alt="Mẫu CCCD VNID" width={300} height={180} className="rounded" />
              <p className="mt-2 text-gray-600">Ảnh phải chụp màn hình đầy đủ từ ứng dụng VNID.</p>
            </div>
          )}

          <button type="submit" disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
            {loading ? 'Đang gửi...' : 'Gửi thông tin'}
          </button>
        </form>
      </div>
    </div>
  );
}