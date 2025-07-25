'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface FormData {
  _id: string;
  fullName: string;
  dob: string;
  citizenId: string;
  oldAddress: string;
  newAddress: string;
  attr: string[];
  imageFront?: string;
  imageBack?: string;
  createdAt: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/forms';

export default function FormListPage() {
  const [forms, setForms] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchForms = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL);
        setForms(res.data);
      } catch (err) {
        console.error('Lỗi khi lấy danh sách form:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-7xl mx-auto bg-white p-6 shadow rounded-xl">
        <h1 className="text-xl font-bold mb-4 text-indigo-700">Danh sách khai báo</h1>
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm border">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-2 py-2 border">STT</th>
                  <th className="px-4 py-2 border">Họ tên</th>
                  <th className="px-4 py-2 border">Ngày sinh</th>
                  <th className="px-4 py-2 border">CCCD</th>
                  <th className="px-4 py-2 border">Địa chỉ cũ</th>
                  <th className="px-4 py-2 border">Địa chỉ mới</th>
                  <th className="px-4 py-2 border">Mặt trước</th>
                  <th className="px-4 py-2 border">Mặt sau</th>
                  <th className="px-4 py-2 border">Thời gian</th>
                </tr>
              </thead>

              <tbody>
                {forms.map((form, index) => (
                  <tr key={form._id} className="hover:bg-gray-50">
                    <td className="px-2 py-2 border text-center">{index + 1}</td>
                    <td className="px-4 py-2 border">{form.fullName}</td>
                    <td className="px-4 py-2 border">{form.dob}</td>
                    <td className="px-4 py-2 border">{form.citizenId}</td>
                    <td className="px-4 py-2 border">{form.oldAddress}</td>
                    <td className="px-4 py-2 border">{form.newAddress}</td>
                    <td className="px-4 py-2 border">
                      {form.imageFront ? (
                        <a href={form.imageFront} target="_blank" className="text-blue-500 underline">Xem</a>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      {form.imageBack ? (
                        <a href={form.imageBack} target="_blank" className="text-blue-500 underline">Xem</a>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-4 py-2 border">{new Date(form.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>
    </div>
  );
}
