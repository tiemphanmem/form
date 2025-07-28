'use client';

import { useEffect, useState } from 'react';
import { Download, UserCircle } from 'lucide-react';
import * as XLSX from 'xlsx';

interface User {
  _id: string;
  userCode: string;
  fullName: string;
  citizenId: string;
  email?: string;
  form?: string;
}

export default function UsersWithoutFormPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/data/users.json')
      .then((res) => res.json())
      .then((data) => {
        const noFormUsers = data.filter((user: User) => !user.form);
        setUsers(noFormUsers);
      })
      .catch((err) => console.error('Error loading users:', err));
  }, []);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'users_without_forms.xlsx');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-teal-100 p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-teal-800">Danh sách nhân viên chưa gửi form</h1>
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md shadow-md transition"
        >
          <Download className="w-4 h-4" /> Tải Excel
        </button>
      </div>

      <div className="overflow-auto rounded-xl border shadow-sm">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-teal-100 text-teal-800">
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Mã NV</th>
              <th className="p-3 text-left">Họ tên</th>
              <th className="p-3 text-left">CCCD</th>
              <th className="p-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className="even:bg-gray-50 hover:bg-teal-50">
                <td className="p-3 text-sm text-gray-800">{idx + 1}</td>
                <td className="p-3 text-sm text-gray-800 font-medium">{user.userCode}</td>
                <td className="p-3 text-sm text-gray-800">{user.fullName}</td>
                <td className="p-3 text-sm text-gray-800">{user.citizenId}</td>
                <td className="p-3 text-sm text-gray-800">{user.email || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
