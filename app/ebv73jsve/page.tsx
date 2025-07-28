'use client';

import { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Eye, MapPin, User, Calendar, BadgePlus } from 'lucide-react';

interface Form {
  _id: string;
  fullName: string;
  dob: string;
  citizenId: string;
  newAddress?: string;
  temporaryAddress?: string;
  currentAddress?: string;
  vnidImage: string;
  createdAt: string;
}

export default function FormsPage() {
  const [forms, setForms] = useState<Form[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/forms.json')
      .then((res) => res.json())
      .then((data) => setForms(data))
      .catch((err) => console.error('Error loading forms:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 p-4 text-black">
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        Danh sách biểu mẫu CCCD
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-lg shadow overflow-hidden text-sm">
          <thead className="bg-indigo-200 text-indigo-900">
            <tr>
              <th className="py-3 px-4 text-left">STT</th>
              <th className="py-3 px-4 text-left">Họ tên</th>
              <th className="py-3 px-4 text-left">Ngày sinh</th>
              <th className="py-3 px-4 text-left">Số CCCD</th>
              <th className="py-3 px-4 text-left">Địa chỉ</th>
              <th className="py-3 px-4 text-left">Ảnh</th>
              <th className="py-3 px-4 text-left">Gửi lúc</th>
            </tr>
          </thead>
          <tbody>
            {forms.map((form, index) => (
              <tr key={form._id} className="border-b hover:bg-indigo-50">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{form.fullName}</td>
                <td className="py-2 px-4">{form.dob}</td>
                <td className="py-2 px-4">{form.citizenId}</td>
                <td className="py-2 px-4">
                  {form.newAddress}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => setSelectedImage(form.vnidImage)}
                    className="text-indigo-700 hover:text-indigo-500 flex items-center gap-1 text-sm"
                  >
                    <Eye className="w-4 h-4" /> Xem ảnh
                  </button>
                </td>
                <td className="py-2 px-4 text-gray-500 text-xs">
                  {new Date(form.createdAt.$date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 md:hidden gap-4">
        {forms.map((form, index) => (
          <div key={form._id} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="p-4 space-y-1">
              <div className="font-bold text-indigo-800 flex items-center gap-2">
                <User className="w-4 h-4" /> {form.fullName}
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {form.dob}
              </div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <BadgePlus className="w-4 h-4" /> {form.citizenId}
              </div>
              {[form.newAddress, form.temporaryAddress, form.currentAddress].map(
                (addr, i) =>
                  addr && (
                    <div key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {addr}
                    </div>
                  )
              )}
              <button
                onClick={() => setSelectedImage(form.vnidImage)}
                className="mt-2 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-400 text-sm"
              >
                <Eye className="w-4 h-4" /> Xem ảnh CCCD
              </button>
              <div className="text-xs text-gray-400">{new Date(form.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Dialog */}
      <Transition appear show={!!selectedImage} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setSelectedImage(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Ảnh CCCD
                  </Dialog.Title>
                  <img
                    src={selectedImage!}
                    alt="Ảnh CCCD"
                    className="w-full max-h-[80vh] object-contain rounded"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
