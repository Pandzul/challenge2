import React from 'react';

const data = [
  { no: 1, nim: '123456789', nama: 'John Doe', gender: 'Laki-laki', prodi: 'Teknik Informatika', kelas: 'TI-1A', semester: 4, alamat: 'Jl. Mawar No.1', hobby: 'Membaca', citaCita: 'Programmer' },
  { no: 2, nim: '987654321', nama: 'Jane Smith', gender: 'Perempuan', prodi: 'Sistem Informasi', kelas: 'SI-1B', semester: 6, alamat: 'Jl. Melati No.2', hobby: 'Menulis', citaCita: 'Data Scientist' },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>
      <div className="hidden md:block">
        {/* Desktop (Table) */}
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">NIM</th>
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">Gender</th>
              <th className="border border-gray-300 p-2">Prodi</th>
              <th className="border border-gray-300 p-2">Kelas</th>
              <th className="border border-gray-300 p-2">Semester</th>
              <th className="border border-gray-300 p-2">Alamat</th>
              <th className="border border-gray-300 p-2">Hobby</th>
              <th className="border border-gray-300 p-2">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">{item.no}</td>
                <td className="border border-gray-300 p-2">{item.nim}</td>
                <td className="border border-gray-300 p-2">{item.nama}</td>
                <td className="border border-gray-300 p-2">{item.gender}</td>
                <td className="border border-gray-300 p-2">{item.prodi}</td>
                <td className="border border-gray-300 p-2">{item.kelas}</td>
                <td className="border border-gray-300 p-2 text-center">{item.semester}</td>
                <td className="border border-gray-300 p-2">{item.alamat}</td>
                <td className="border border-gray-300 p-2">{item.hobby}</td>
                <td className="border border-gray-300 p-2">{item.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block md:hidden">
        {/* Mobile (Grid) */}
        <div className="grid grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg bg-white shadow">
              <p><strong>No:</strong> {item.no}</p>
              <p><strong>NIM:</strong> {item.nim}</p>
              <p><strong>Nama:</strong> {item.nama}</p>
              <p><strong>Gender:</strong> {item.gender}</p>
              <p><strong>Prodi:</strong> {item.prodi}</p>
              <p><strong>Kelas:</strong> {item.kelas}</p>
              <p><strong>Semester:</strong> {item.semester}</p>
              <p><strong>Alamat:</strong> {item.alamat}</p>
              <p><strong>Hobby:</strong> {item.hobby}</p>
              <p><strong>Cita-cita:</strong> {item.citaCita}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
