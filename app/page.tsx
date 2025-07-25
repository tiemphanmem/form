'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageIcon, UploadCloud } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/forms';


const PROVINCE_API = 'https://provinces.open-api.vn/api';

export default function SubmitFormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    oldAddress: '',
    newAddress: '',
    citizenId: '',
    attr: [],
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  const [manualAddress, setManualAddress] = useState('');
  const [useManualInput, setUseManualInput] = useState(false);

  const [imageFront, setImageFront] = useState<File | null>(null);
  const [imageBack, setImageBack] = useState<File | null>(null);


  useEffect(() => {
    axios.get(`${PROVINCE_API}/?depth=1`)
      .then(res => setProvinces(res.data))
      .catch(err => console.error('Không tải được danh sách tỉnh', err));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      axios.get(`${PROVINCE_API}/p/${selectedProvince}?depth=2`)
        .then(res => setDistricts(res.data.districts))
        .catch(err => console.error('Không tải được huyện', err));
    } else {
      setDistricts([]);
      setWards([]);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      axios.get(`${PROVINCE_API}/d/${selectedDistrict}?depth=2`)
        .then(res => setWards(res.data.wards))
        .catch(err => console.error('Không tải được xã', err));
    } else {
      setWards([]);
    }
  }, [selectedDistrict]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleImageFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setImageFront(e.target.files[0]);
  };

  const handleImageBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setImageBack(e.target.files[0]);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const fullAddress = useManualInput
        ? manualAddress
        : `${wards.find(w => w.code == selectedWard)?.name || ''}, ${districts.find(d => d.code == selectedDistrict)?.name || ''}, ${provinces.find(p => p.code == selectedProvince)?.name || ''}`;

      const data = new FormData();
      const submission = { ...formData, oldAddress: fullAddress };

      Object.entries(submission).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => data.append(key, v));
        } else {
          data.append(key, value);
        }
      });
      if (imageFront) data.append('imageFront', imageFront);
      if (imageBack) data.append('imageBack', imageBack);


      await axios.post(API_URL, data);
      alert('Gửi thành công!');
      setFormData({ fullName: '', dob: '', oldAddress: '', newAddress: '', citizenId: '', attr: [] });
      setSelectedProvince('');
      setSelectedDistrict('');
      setSelectedWard('');
      setManualAddress('');
      setUseManualInput(false);
      setImage(null);
    } catch (err) {
      console.error(err);
      alert('Gửi thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-600 via-sky-300 to-sky-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-xl w-full bg-white shadow-xl p-8 rounded-2xl space-y-6 border border-gray-100 text-black">
        <h2 className="text-xl font-semibold text-indigo-700 text-center">Khai báo địa chỉ hành chính mới</h2>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ cũ</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" checked={useManualInput} onChange={() => setUseManualInput(!useManualInput)} className="mr-2" />
                Nhập thủ công
              </label>
              {useManualInput ? (
                <input
                  type="text"
                  value={manualAddress}
                  onChange={(e) => setManualAddress(e.target.value)}
                  placeholder="Nhập địa chỉ cũ"
                  className="w-full px-3 py-2 border rounded"
                />
              ) : (
                <div className="space-y-2">
                  <select value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="w-full px-3 py-2 border rounded">
                    <option value="">Chọn tỉnh</option>
                    {provinces.map((p) => (
                      <option key={p.code} value={p.code}>{p.name}</option>
                    ))}
                  </select>
                  <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="w-full px-3 py-2 border rounded" disabled={!selectedProvince}>
                    <option value="">Chọn huyện</option>
                    {districts.map((d) => (
                      <option key={d.code} value={d.code}>{d.name}</option>
                    ))}
                  </select>
                  <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} className="w-full px-3 py-2 border rounded" disabled={!selectedDistrict}>
                    <option value="">Chọn xã</option>
                    {wards.map((w) => (
                      <option key={w.code} value={w.code}>{w.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ mới</label>
            <input name="newAddress" value={formData.newAddress} onChange={handleChange} required className="w-full px-3 py-2 border rounded" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ảnh đính kèm <span className="text-red-500 font-semibold">(Mặt trước CCCD)</span>
              </label>
              <label className="flex items-center gap-2 border rounded-lg px-4 py-3 bg-white shadow-sm cursor-pointer hover:bg-gray-50">
                <UploadCloud className="text-indigo-600" size={20} />
                <span className="text-sm text-gray-700">Chọn ảnh</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFrontChange}
                  className="hidden"
                />
              </label>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ảnh đính kèm <span className="text-red-500 font-semibold">(Mặt sau CCCD)</span>
              </label>
              <label className="flex items-center gap-2 border rounded-lg px-4 py-3 bg-white shadow-sm cursor-pointer hover:bg-gray-50">
                <UploadCloud className="text-indigo-600" size={20} />
                <span className="text-sm text-gray-700">Chọn ảnh</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageBackChange}
                  className="hidden"
                />
              </label>
            </div>

          </div>

          <button type="submit" disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full">
            {loading ? 'Đang gửi...' : 'Gửi thông tin'}
          </button>
        </form>
      </div>
    </div>
  );
}
